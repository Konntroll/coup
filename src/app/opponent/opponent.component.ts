import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-opponent',
  templateUrl: './opponent.component.html',
  styleUrls: ['./opponent.component.css']
})
export class OpponentComponent implements OnInit {

  opps: Array<string>;

  constructor(private serverService: ServerService) { }

  ngOnInit(): void {
    this.opps = ['Opponent 1', 'Opponent 2', 'Opponent 3', 'Opponent 4'];
  }

  transmit(message) {
    this.serverService.sendMessage(message);
  }

}
