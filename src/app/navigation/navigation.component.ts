import { Component, OnInit } from '@angular/core';

interface Link {
  name: string;
  to: string;
}

const LINKS: Link[] = [
  {
    name: 'Home',
    to: 'home',
  },
  {
    name: 'Students',
    to: 'students',
  },
  {
    name: 'Charity',
    to: 'charity',
  },
  {
    name: 'Events',
    to: 'events',
  },
  {
    name: 'Gallery',
    to: 'gallery',
  },
  {
    name: 'Contributors',
    to: 'contributors',
  },
  {
    name: 'Contact us',
    to: 'contact-us',
  },
];

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  links: Link[];

  isNavbarCollapsed = true;

  constructor() {
    this.links = Array.from(LINKS);
  }

  ngOnInit() {}
}
