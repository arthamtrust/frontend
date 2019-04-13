import { Component, OnInit } from '@angular/core';
import { ContributorsService } from '../contributors.service';
import { ContributorSidebar, Contributor } from '../contributor.type';

@Component({
  selector: 'app-contributor-list',
  templateUrl: './contributor-list.component.html',
  styleUrls: ['./contributor-list.component.scss'],
})
export class ContributorListComponent implements OnInit {
  contributors: Contributor;
  contributorSidebar: ContributorSidebar[];

  constructor(private contributorService: ContributorsService) {}

  ngOnInit() {
    this.contributorService.getContributors().subscribe(contributors => {
      this.contributors = contributors;
    });

    this.contributorService
      .getContributorsSidebar()
      .subscribe(contributorSidebar => {
        this.contributorSidebar = contributorSidebar;
      });
  }
}
