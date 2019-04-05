import { Component, OnInit } from '@angular/core';

interface Link {
  name: string;
  to: string;
}

const LINKS: Link[] = [
  {
    name: 'Home',
    to: '/',
  },
  {
    name: 'Students',
    to: '/',
  },
  {
    name: 'Charity',
    to: '/',
  },
  {
    name: 'Events',
    to: '/',
  },
  {
    name: 'Gallery',
    to: '/',
  },
  {
    name: 'Contributors',
    to: '/',
  },
  {
    name: 'Contact us',
    to: '/',
  },
];

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  links: Link[];

  constructor() {
    this.links = Array.from(LINKS);
  }

  ngOnInit() {}
}
