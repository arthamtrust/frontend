import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharitiesComponent } from './charities.component';
import { CharityListComponent } from './charity-list/charity-list.component';

const routes: Routes = [
  {
    path: 'charities',
    component: CharitiesComponent,
    children: [{ path: '', component: CharityListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharitiesRoutingModule {}
