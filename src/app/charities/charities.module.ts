import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CharitiesRoutingModule } from "./charities-routing.module";
import { CharitiesComponent } from "./charities.component";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../shared/shared.module";
import { CharitiesService } from "./charities.service";
import { CharityListComponent } from "./charity-list/charity-list.component";

import {
  NgbPaginationModule,
  NgbAccordionModule,
} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [CharitiesComponent, CharityListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CharitiesRoutingModule,
    NgbPaginationModule,
    NgbAccordionModule,
    SharedModule,
  ],
  providers: [CharitiesService],
})
export class CharitiesModule {}
