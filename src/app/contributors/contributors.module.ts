import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContributorsRoutingModule } from './contributors-routing.module';
import { ContributorsComponent } from './contributors.component';
import { ContributorListComponent } from './contributor-list/contributor-list.component';

@NgModule({
  declarations: [ContributorsComponent, ContributorListComponent],
  imports: [
    CommonModule,
    ContributorsRoutingModule
  ]
})
export class ContributorsModule { }
