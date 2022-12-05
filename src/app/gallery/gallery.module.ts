import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GalleryRoutingModule } from "./gallery-routing.module";
import { GalleryComponent } from "./gallery.component";
import { GalleryListComponent } from "./gallery-list/gallery-list.component";
import { SharedModule } from "../shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { GalleryService } from "./gallery.service";

@NgModule({
  declarations: [GalleryComponent, GalleryListComponent],
  imports: [CommonModule, GalleryRoutingModule, HttpClientModule, SharedModule],
  providers: [GalleryService],
})
export class GalleryModule {}
