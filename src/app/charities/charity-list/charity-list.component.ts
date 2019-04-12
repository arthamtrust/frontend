import { Component, OnInit, OnDestroy } from '@angular/core';
import { CharitiesService } from '../charities.service';
import { Charity, CharitySidebar } from '../charity.type';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Params } from '@angular/router';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-charity-list',
  templateUrl: './charity-list.component.html',
  styleUrls: ['./charity-list.component.scss'],
  providers: [NgbAccordionConfig],
})
export class CharityListComponent implements OnInit, OnDestroy {
  title: string;

  page: number;
  pageSize: number;
  collectionSize: number;

  charities: Charity[] = [];
  charitySidebar: CharitySidebar[] = [];

  routerSubscription: Subscription;

  constructor(
    private charitiesService: CharitiesService,
    config: NgbAccordionConfig,
    private route: ActivatedRoute,
  ) {
    this.title = 'Charities';
    this.page = 1;
    this.pageSize = 3;

    config.closeOthers = true;
  }

  ngOnInit() {
    this.routerSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        const year = +params['year'];
        const month = +params['month'];
        const id = +params['id'];

        this.page = 1;

        if (id) {
          this.charitiesService.getCharitiesList().subscribe(charities => {
            this.charities = charities.filter(charity => charity.id === id);
            console.log(charities.filter(charity => charity.id === id));
          });
        } else if (year && month) {
          this.charitiesService.getCharitiesList().subscribe(charities => {
            this.charities = charities.filter(charity => {
              const published_date = new Date(charity.published_date);

              if (
                year === published_date.getFullYear() &&
                month === published_date.getMonth() + 1
              ) {
                return true;
              }

              return false;
            });
          });
        } else {
          this.charitiesService.getCharitiesList().subscribe(charities => {
            this.charities = charities;
          });
        }
      },
    );

    this.charitiesService.getCharitiesSidebar().subscribe(charitiesSidebar => {
      this.charitySidebar = charitiesSidebar;
    });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
