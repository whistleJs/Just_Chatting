import { JwtService } from '@nestjs/jwt';
import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
} from '@nestjs/websockets';
import { Cron } from '@nestjs/schedule';
import { UseGuards } from '@nestjs/common';
import { Server, Socket } from 'socket.io';

import { SocketGaurd } from '@/guard/socket.guard';

import ChatHistoryService from '@/api/service/chatHistory.service';
import StatusService from '@/api/service/status.service';
import UserService from '@/api/service/user.service';

import { JwtVerify } from '@/api/model/jwt.model';
import { StatusSocketResponse } from '@/api/model/response/status.response';

@WebSocketGateway(8000, {
  transports: ['websocket'],
  cors: '*',
})
export default class SocketGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  constructor(
    private readonly jwtService: JwtService,
    private readonly chatHistoryService: ChatHistoryService,
    private readonly statusService: StatusService,
    private readonly userService: UserService,
  ) {}

  @WebSocketServer()
  server: Server;

  private getUserByToken(token: string) {
    const { sub: userId } = this.jwtService.decode(token) as JwtVerify;

    if (!userId) return null;

    return this.userService.findById(userId);
  }

  /**
   * Connect Socket
   */
  @UseGuards(SocketGaurd)
  async handleConnection(socket: Socket) {
    const user = await this.getUserByToken(socket.handshake.auth.token);

    if (!user) return;

    await this.statusService.updateByUserId({ user, isOnline: true });

    this.handleStatusList();
  }

  /**
   * Disconnect Socket
   */
  @UseGuards(SocketGaurd)
  async handleDisconnect(socket: Socket) {
    const user = await this.getUserByToken(socket.handshake.auth.token);

    if (!user) return;

    await this.statusService.updateByUserId({ user, isOnline: false });
  }

  /**
   * Send user status list to Client
   */
  @UseGuards(SocketGaurd)
  @Cron('0 * * * * *')
  async handleStatusList() {
    const statusList: StatusSocketResponse[] = (
      await this.statusService.findAll()
    ).map(({ isOnline, updatedAt, user: { id, nickname } }) => {
      return {
        id,
        nickname,
        isOnline,
        updatedAt,
      };
    });

    this.server.emit('/status-list', statusList);
  }

  /**
   * Receive message by client - /chat/message
   */
  @UseGuards(SocketGaurd)
  @SubscribeMessage('/chat/message')
  async handleReceiveMessageByClient(
    client: Socket,
    { message, type }: { message: string; type: ChatHistoryType },
  ) {
    const user = await this.getUserByToken(client.handshake.auth.token);

    if (user) {
      const chatHistory = await this.chatHistoryService.create({
        user,
        message,
        type,
      });

      this.server.emit('/chat/message', chatHistory);
    }
  }
}
