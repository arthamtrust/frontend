import { Component, OnInit } from '@angular/core';
import { CharitiesService } from '../charities.service';
import { Charity } from '../charity.type';

@Component({
  selector: 'app-charity-list',
  templateUrl: './charity-list.component.html',
  styleUrls: ['./charity-list.component.scss'],
})
export class CharityListComponent implements OnInit {
  title: string;
  charities: Charity[];

  constructor(private charitiesService: CharitiesService) {
    this.title = 'Charities';
  }

  ngOnInit() {
    this.charitiesService.getCharitiesList().subscribe(charities => {
      this.charities = charities;
    });
  }
}
