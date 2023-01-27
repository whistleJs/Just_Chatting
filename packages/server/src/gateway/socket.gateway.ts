import { JwtService } from '@nestjs/jwt';
import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

import StatusService from '@/api/service/status.service';
import { JwtVerify } from '@/api/model/jwt.model';
import UserService from '@/api/service/user.service';

@WebSocketGateway(8000, {
  transports: ['websocket'],
  cors: '*',
})
export default class SocketGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  constructor(
    private readonly jwtService: JwtService,
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
  async handleConnection(client: Socket) {
    const user = await this.getUserByToken(client.handshake.auth.token);

    if (!user) return;

    await this.statusService.updateByUserId({ user, isOnline: true });
  }

  /**
   * Disconnect Socket
   */
  async handleDisconnect(client: Socket) {
    const user = await this.getUserByToken(client.handshake.auth.token);

    if (!user) return;

    await this.statusService.updateByUserId({ user, isOnline: false });
  }
}
