import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { Student } from '../student.type';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss'],
})
export class StudentsListComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentsService: StudentsService) {}

  ngOnInit() {
    this.studentsService.getStudentsList().subscribe(students => {
      this.students = students;
    });
  }
}
