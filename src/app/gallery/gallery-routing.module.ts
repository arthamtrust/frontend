import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GalleryComponent } from "./gallery.component";
import { GalleryListComponent } from "./gallery-list/gallery-list.component";

const routes: Routes = [
  {
    path: "",
    component: GalleryComponent,
    children: [{ path: "", component: GalleryListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalleryRoutingModule {}
