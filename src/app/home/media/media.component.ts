import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent implements OnInit {
  images = [1, 2, 3].map(id => `assets/img/carousel-${id}.jpg`);

  constructor() {}

  ngOnInit() {}
}
