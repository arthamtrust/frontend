import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students.component';
import { StudentsListComponent } from './students-list/students-list.component';

const routes: Routes = [
  {
    path: 'students',
    component: StudentsComponent,
    children: [{ path: '', component: StudentsListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule {}
