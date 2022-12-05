import { Component, OnInit } from "@angular/core";

interface Link {
  name: string;
  to: string;
  exact: boolean;
}

const LINKS: Link[] = [
  {
    name: "Home",
    to: "home",
    exact: true,
  },
  {
    name: "Students",
    to: "students",
    exact: false,
  },
  {
    name: "Charities",
    to: "charities",
    exact: false,
  },
  {
    name: "Events",
    to: "events",
    exact: false,
  },
  {
    name: "Gallery",
    to: "gallery",
    exact: false,
  },
  {
    name: "Contributors",
    to: "contributors",
    exact: false,
  },
  {
    name: "Contact us",
    to: "contact-us",
    exact: false,
  },
];

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit {
  links: Link[];

  isNavbarCollapsed = true;

  constructor() {
    this.links = Array.from(LINKS);
  }

  ngOnInit() {}
}
