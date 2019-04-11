import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [StudentsComponent, StudentDetailComponent],
  imports: [CommonModule, StudentsRoutingModule, SharedModule],
})
export class StudentsModule {}
