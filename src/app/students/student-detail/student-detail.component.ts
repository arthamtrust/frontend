import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student.type';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss'],
})
export class StudentDetailComponent implements OnInit {
  student: Student;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentsService,
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.studentService.getStudent(id).subscribe(student => {
      this.student = student;

      const parser = new DOMParser();
      const descriptionElement = parser.parseFromString(
        student.description,
        'text/html',
      );
      const elements = descriptionElement.querySelectorAll('#marks *');
      elements.forEach(({ textContent }) => {
        console.log(textContent);
      });
    });
  }
}
