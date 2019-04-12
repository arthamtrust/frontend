import { Component, OnInit } from '@angular/core';
import { CharitiesService } from '../charities.service';
import { Charity, CharitySidebar } from '../charity.type';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-charity-list',
  templateUrl: './charity-list.component.html',
  styleUrls: ['./charity-list.component.scss'],
  providers: [NgbAccordionConfig],
})
export class CharityListComponent implements OnInit {
  title: string;
  page: number;
  pageSize: number;
  collectionSize: number;
  charities: Charity[];
  charitySidebar: CharitySidebar[];

  constructor(
    private charitiesService: CharitiesService,
    private config: NgbAccordionConfig,
  ) {
    this.title = 'Charities';
    this.page = 1;
    this.pageSize = 3;

    config.closeOthers = true;
  }

  ngOnInit() {
    this.charitiesService.getCharitiesList().subscribe(charities => {
      this.charities = charities;
    });

    this.charitiesService.getCharitiesSidebar().subscribe(charitiesSidebar => {
      this.charitySidebar = charitiesSidebar;
    });
  }
}
