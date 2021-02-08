import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comm',
  templateUrl: './comm.component.html',
  styleUrls: ['./comm.component.css']
})
export class CommComponent implements OnInit {

  message: string;

  constructor() { }

  ngOnInit(): void {
    this.message = 'Opponent 1 is challenging you!';
  }

}
