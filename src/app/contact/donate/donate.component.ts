import { Component, OnInit } from '@angular/core';

interface Details {
  name: string;
  detail: string;
}

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss'],
})
export class DonateComponent implements OnInit {
  details: Details[];

  constructor() {
    this.details = [
      {
        name: 'Bank',
        detail: 'HDFC',
      },
      {
        name: 'Name',
        detail: 'ARTHAM CHARITABLE FOUNDATION',
      },
      {
        name: 'Account Number',
        detail: '50200000458360',
      },
      {
        name: 'IFSC code',
        detail: 'HDFC0002409',
      },
      {
        name: 'Account type',
        detail: 'Current account',
      },
      {
        name: 'Branch',
        detail: 'Bye pass, Madurai',
      },
    ];
  }

  ngOnInit() {}
}
