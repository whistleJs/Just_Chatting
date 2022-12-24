import { Logger } from '@nestjs/common';
import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway(8000, {
  transports: ['websocket'],
})
export class SocketGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private logger: Logger = new Logger('Socket Gateway');

  @WebSocketServer()
  server: Server;

  async handleConnection(client: any, ...args: any[]) {
    console.log('[Socket] Connect');
  }

  async handleDisconnect(client: any) {
    console.log('[Socket] Disconnect');
  }

  afterInit(server: Server) {
    console.log('After Init');
  }
}
