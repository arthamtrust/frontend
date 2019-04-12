import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventsService } from '../events.service';
import { Event, EventSidebar } from '../events.type';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Params } from '@angular/router';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
  providers: [NgbAccordionConfig],
})
export class EventListComponent implements OnInit, OnDestroy {
  title: string;

  page: number;
  pageSize: number;
  collectionSize: number;

  events: Event[];
  eventSidebar: EventSidebar[];

  routerSubscription: Subscription;

  constructor(
    private eventsService: EventsService,
    config: NgbAccordionConfig,
    private route: ActivatedRoute,
  ) {
    this.title = 'Events';
    this.page = 1;
    this.pageSize = 2;

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
          this.eventsService.getEventsList().subscribe(events => {
            this.events = events.filter(event => event.id === id);
            console.log(events.filter(event => event.id === id));
          });
        } else if (year && month) {
          this.eventsService.getEventsList().subscribe(events => {
            this.events = events.filter(event => {
              const published_date = new Date(event.published_date);

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
          this.eventsService.getEventsList().subscribe(events => {
            this.events = events;
          });
        }
      },
    );

    this.eventsService.getEventsSidebar().subscribe(eventsSidebar => {
      this.eventSidebar = eventsSidebar;
    });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
