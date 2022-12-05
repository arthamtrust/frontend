import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { HTTP404Component } from "./core/http404/http404.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "students",
    loadChildren: "./students/students.module#StudentsModule",
  },
  {
    path: "charities",
    loadChildren: ".//charities/charities.module#CharitiesModule",
  },
  {
    path: "events",
    loadChildren: "./events/events.module#EventsModule",
  },
  {
    path: "gallery",
    loadChildren: "./gallery/gallery.module#GalleryModule",
  },
  {
    path: "contributors",
    loadChildren: "./contributors/contributors.module#ContributorsModule",
  },
  {
    path: "contact-us",
    loadChildren: "./contact/contact.module#ContactModule",
  },
  { path: "", pathMatch: "full", redirectTo: "/home" },
  { path: "**", component: HTTP404Component },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
