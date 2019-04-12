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
  graphData: any[] = [
    {
      name: 'marks',
      series: [],
    },
  ];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  // line, area
  autoScale = true;

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
      elements.forEach(({ textContent }, index) => {
        const dataPoint = +textContent.slice(0, textContent.length - 1);
        if (dataPoint) {
          this.graphData[0].series.push({
            name: index.toString(),
            value: dataPoint,
          });
        }
      });

      console.log(this.graphData);
    });
  }
}
