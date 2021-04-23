import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { TitleService } from '../title.service';
import { Student } from '../student';
@Component({
    selector: 'app-survey',
    templateUrl: './survey.component.html',
    styleUrls: ['./survey.component.css']
})

export class SurveyComponent implements OnInit {
    student: Student = new Student();
    list_likes = []
    submitted = false;
    numbers
    numberArr
    validNumber
    loadingFailure
    radioOptions = ["friends", "television", "internet", "other"]
    options = [{ name: 'students', checked: false }, { name: 'location', checked: false }, { name: 'campus', checked: false }, { name: 'atmosphere', checked: false }, { name: 'dorm rooms', checked: false }, { name: 'sports', checked: false }]
    constructor(private titleService: TitleService, private studentService: StudentService, private router: Router) { }

    ngOnInit(): void {
        this.titleService.setTitle("Survey Form");
    }

    validateTextAreaInput() {
        try {
            var numberArr = this.getArray()
            var length = numberArr.length
            return (length == 10);
        } catch (error) {
            return false;
        }

    }

   
    onSubmit() {
        this.student.about_college = this.list_likes.join();
        
        this.saveresponse();
        this.submitted = true;
        return;
        } 
    getArray() {
        return this.numbers.split(",");
    }
    saveresponse() {
        this.studentService.postStudent(this.student).subscribe(
            succeed=>{
              alert('Form submitted\n'  + this.student);      
              this.router.navigate(['./home']);
            },
            error=>{
              alert('failed to submit the form\n' + this.student);
            });
    
        // this.student = new Student();
        
      }
      onCheckboxChange(event, value) {
        if (event.target.checked) {
    
          this.list_likes.push(value);
        } 
        if (!event.target.checked) {
    
          let index = this.list_likes.indexOf(value);
    
          if (index > -1) {
    
            this.list_likes.splice(index, 1);
          }
        }
      }
    onSubmit1(surveyForm: NgForm) {

        // Validation for atleast 2 checkbox selected
        var checked = 0;
        var c = surveyForm.value;
        for (var i = 0; i < c.length; i++) {
            if (c[i].checked)
                checked++;
        }
        document.getElementById("checkbox_error").innerHTML = ""
        if (checked < 2) {
            document.getElementById("checkbox_error").innerHTML = "You should choose atleast 2 selections.";
            return false;
        }
        // Validation for atleast 1 radiobutton selected
        document.getElementById("radio_error").innerHTML = ""
        var radios = surveyForm.value;
        var result = false
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                result = true;
                break;
            }
        }
        if (result == false) {
            document.getElementById("radio_error").innerHTML = "Select atleast one interest";
            return false;
        }

    }

}
