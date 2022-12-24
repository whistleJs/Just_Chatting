import { Logger } from '@nestjs/common';
import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(8000, {
  transports: ['websocket'],
  cors: '*',
})
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  private logger: Logger = new Logger('Socket Gateway');

  @WebSocketServer()
  server: Server;

  async handleConnection(client: Socket) {
    this.logger.debug(`Connect - ${client.id}`);
  }

  async handleDisconnect(client: Socket) {
    this.logger.debug(`Disconnect - ${client.id}`);
  }
}
