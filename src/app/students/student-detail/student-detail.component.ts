import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student.type';
import { StudentsService } from '../students.service';
import { extractStudentData, GraphData } from './student-data-parser';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss'],
})
export class StudentDetailComponent implements OnInit {
  student: Student;

  graphData: GraphData[] = [];
  // Chart options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Exams';
  showYAxisLabel = true;
  yAxisLabel = 'Marks';
  colorScheme = 'cool';
  autoScale = true;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentsService,
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.studentService.getStudent(id).subscribe(student => {
      this.student = student;

      this.graphData = extractStudentData(student.description);
    });
  }
}
