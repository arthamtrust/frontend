import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { HTTP404Component } from "./core/http404/http404.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "students",
    loadChildren: () => import('./students/students.module').then(m => m.StudentsModule),
  },
  {
    path: "charities",
    loadChildren: () => import('.//charities/charities.module').then(m => m.CharitiesModule),
  },
  {
    path: "events",
    loadChildren: () => import('./events/events.module').then(m => m.EventsModule),
  },
  {
    path: "gallery",
    loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule),
  },
  {
    path: "contributors",
    loadChildren: () => import('./contributors/contributors.module').then(m => m.ContributorsModule),
  },
  {
    path: "contact-us",
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
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
