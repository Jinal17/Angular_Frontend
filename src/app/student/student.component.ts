import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service'
import { ActivatedRoute } from '@angular/router';
import { TitleService } from '../title.service';
import {Student} from '../student';
import { Observable} from "rxjs";
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentId
  student
  loadingFailure
  students: Observable<Student[]>;
  constructor(private titleService:TitleService,private studentService: StudentService, private activatedRoute: ActivatedRoute) {
   this.studentId = this.activatedRoute.snapshot.params.studentId;
  }
  
  ngOnInit(): void {
    this.titleService.setTitle("Student Record")
    this.students = this.studentService.getStudent();
    this.students.forEach(function (value) {
      console.log(value);
  });
  }
  
}
  


