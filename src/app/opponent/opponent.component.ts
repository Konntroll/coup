import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opponent',
  templateUrl: './opponent.component.html',
  styleUrls: ['./opponent.component.css']
})
export class OpponentComponent implements OnInit {

  opps: Array<string>;

  constructor() { }

  ngOnInit(): void {
    this.opps = ['Opponent 1', 'Opponent 2', 'Opponent 3', 'Opponent 4'];
  }

}
