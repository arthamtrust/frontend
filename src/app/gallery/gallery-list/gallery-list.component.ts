import { Component, OnInit } from '@angular/core';
import { Gallery } from '../gallery.type';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss'],
})
export class GalleryListComponent implements OnInit {
  title: string;

  galleries: Gallery[] = [];

  constructor(private galleryService: GalleryService) {
    this.title = 'Gallery';
  }

  ngOnInit() {
    this.galleryService.getGalleries().subscribe(galleries => {
      this.galleries = galleries;
    });
  }
}
