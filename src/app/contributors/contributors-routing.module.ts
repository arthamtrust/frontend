import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContributorsComponent } from './contributors.component';
import { ContributorListComponent } from './contributor-list/contributor-list.component';

const routes: Routes = [
  {
    path: 'contributors',
    component: ContributorsComponent,
    children: [{ path: '', component: ContributorListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContributorsRoutingModule {}
