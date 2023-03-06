import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-records',
  templateUrl: './transaction-records.component.html',
  styleUrls: ['./transaction-records.component.scss'],
})
export class TransactionRecordsComponent  implements OnInit {
  transactions: any[] = [
    {
      "nameSurname": "Henry V Staden",
      "amount": 143,
      "type": "paid"
    },
    {
      "nameSurname": "Susan Le Roux",
      "amount": 300,
      "type": "received"
    },
    {
      "nameSurname": "N/A",
      "amount": 500,
      "type": "redeemed"
    },
    {
      "nameSurname": "Henry V Staden",
      "amount": 150,
      "type": "paid"
    },
    {
      "nameSurname": "Henry V Staden",
      "amount": 210,
      "type": "paid"
    },
    {
      "nameSurname": "Henry V Staden",
      "amount": 143,
      "type": "paid"
    },
    {
      "nameSurname": "Susan Le Roux",
      "amount": 300,
      "type": "received"
    },
    {
      "nameSurname": "N/A",
      "amount": 500,
      "type": "redeemed"
    },
    {
      "nameSurname": "Henry V Staden",
      "amount": 150,
      "type": "paid"
    },
    {
      "nameSurname": "Henry V Staden",
      "amount": 210,
      "type": "paid"
    }
  ];

  constructor() { }

  ngOnInit() {
    this.getTransactions();
  }

  getTransactions() {

  }
}
