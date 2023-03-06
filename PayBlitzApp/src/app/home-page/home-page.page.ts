import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})

export class HomepagePage implements OnInit {
  transactionVis:boolean = false;
  payVis:boolean = false;
  receiveVis:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  test(){
    console.log("test clicked");
  }

  transactionClick(){
    this.transactionVis = true;
    this.payVis = false;
    this.receiveVis = false;
  }

  payClick(){
    this.transactionVis = false;
    this.payVis = true;
    this.receiveVis = false;
  }

  receiveClick(){
    this.transactionVis = false;
    this.payVis = false;
    this.receiveVis = true;
  }
}
