import { Component, OnInit } from '@angular/core';
import { CharitiesService } from '../charities.service';
import { Charity, CharitySidebar } from '../charity.type';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute,
  ) {
    this.title = 'Charities';
    this.page = 1;
    this.pageSize = 3;

    config.closeOthers = true;
  }

  ngOnInit() {
    this.charitiesService.getCharitiesList().subscribe(charities => {
      const year = this.route.snapshot.paramMap.get('year');
      const month = this.route.snapshot.paramMap.get('month');
      const id = this.route.snapshot.paramMap.get('id');
      console.log(id, year, month);
      this.charities = charities;
    });

    this.charitiesService.getCharitiesSidebar().subscribe(charitiesSidebar => {
      this.charitySidebar = charitiesSidebar;
    });
  }
}
