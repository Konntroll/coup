import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  socket;

  constructor() { }

  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);
  }

  sendMessage() {
    this.socket.emit('message', 'hello from the other side');
  }
}
