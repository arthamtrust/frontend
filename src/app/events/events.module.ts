import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EventsRoutingModule } from "./events-routing.module";
import { EventsComponent } from "./events.component";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../shared/shared.module";
import { EventsService } from "./events.service";
import { EventListComponent } from "./event-list/event-list.component";

import {
  NgbPaginationModule,
  NgbAccordionModule,
} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [EventsComponent, EventListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    EventsRoutingModule,
    NgbPaginationModule,
    NgbAccordionModule,
    SharedModule,
  ],
  providers: [EventsService],
})
export class EventsModule {}
