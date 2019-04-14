import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContributorsService } from '../contributors.service';
import { ContributorSidebar, Contributor } from '../contributor.type';
import { Subscription } from 'rxjs';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contributor-list',
  templateUrl: './contributor-list.component.html',
  styleUrls: ['./contributor-list.component.scss'],
})
export class ContributorListComponent implements OnInit, OnDestroy {
  contributors: Contributor;
  contributorSidebar: ContributorSidebar[];

  year: string;
  month: string;
  months: string[];
  selectedMonths: string[];
  monthDisabled: boolean;

  routerSubscription: Subscription;

  constructor(
    private contributorService: ContributorsService,
    private route: ActivatedRoute,
  ) {
    this.year = 'Choose year';
    this.month = 'Choose month';
    this.monthDisabled = true;
  }

  ngOnInit() {
    this.routerSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        const year = params['year'];
        const month = params['month'];

        if (year && month) {
          this.year = year;
          this.month = month;

          this.contributorService
            .getContributors(year, month)
            .subscribe(contributors => {
              this.contributors = contributors[0];
            });
        } else {
          this.contributorService.getContributors().subscribe(contributors => {
            this.contributors = contributors;
          });
        }
      },
    );

    this.contributorService
      .getContributorsSidebar()
      .subscribe(contributorSidebar => {
        this.contributorSidebar = contributorSidebar;
      });
  }

  onYearClicked(year: string) {
    this.year = year;
    this.monthDisabled = false;
    const selectedYear = this.contributorSidebar.filter(
      data => data.year === year,
    );
    this.months = selectedYear[0].months;
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
}
