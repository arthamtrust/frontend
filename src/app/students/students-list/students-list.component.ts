import { Component, OnInit } from "@angular/core";
import { StudentsService } from "../students.service";

@Component({
  selector: "app-students-list",
  templateUrl: "./students-list.component.html",
  styleUrls: ["./students-list.component.scss"],
})
export class StudentsListComponent implements OnInit {
  title: string;
  students: NewType[] = [];

  constructor(private studentsService: StudentsService) {
    this.title = "Students supported by us";
  }

  ngOnInit() {
    this.studentsService.getStudentsList().subscribe((students) => {
      this.students = students;
    });
  }
}
