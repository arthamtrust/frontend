import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharitiesComponent } from './charities.component';

const routes: Routes = [{ path: 'charities', component: CharitiesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharitiesRoutingModule {}
