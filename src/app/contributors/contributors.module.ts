import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContributorsRoutingModule } from "./contributors-routing.module";
import { ContributorsComponent } from "./contributors.component";
import { ContributorListComponent } from "./contributor-list/contributor-list.component";
import { SharedModule } from "../shared/shared.module";
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [ContributorsComponent, ContributorListComponent],
  imports: [
    CommonModule,
    ContributorsRoutingModule,
    NgbDropdownModule,
    SharedModule,
  ],
})
export class ContributorsModule {}
