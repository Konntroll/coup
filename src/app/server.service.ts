import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  socket = io(environment.SOCKET_ENDPOINT);;

  constructor() { }

  listen() {
    this.socket.on('response', (data: string) => {
      console.log(data);
    });
  }

  public sendMessage(message: string = 'hello from the other side') {
    this.socket.emit('message', message);
  }

}
