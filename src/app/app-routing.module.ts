import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HTTP404Component } from './core/http404/http404.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'students',
    loadChildren: './students/students.module#StudentsModule',
  },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', component: HTTP404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
