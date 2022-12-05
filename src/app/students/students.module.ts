import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LineChartModule } from "@swimlane/ngx-charts";

import { StudentsRoutingModule } from "./students-routing.module";
import { StudentsComponent } from "./students.component";
import { StudentDetailComponent } from "./student-detail/student-detail.component";
import { SharedModule } from "../shared/shared.module";
import { StudentsListComponent } from "./students-list/students-list.component";
import { StudentsService } from "./students.service";

@NgModule({
  declarations: [
    StudentsComponent,
    StudentDetailComponent,
    StudentsListComponent,
  ],
  imports: [CommonModule, LineChartModule, StudentsRoutingModule, SharedModule],
  providers: [StudentsService],
})
export class StudentsModule {}
