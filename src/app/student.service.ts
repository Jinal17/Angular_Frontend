import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Student } from './student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // private baseUrl1 = 'http://a6b85c10de9f54b0dac932cf5a2a7f29-796556045.us-east-1.elb.amazonaws.com:9191/students';
  // private baseUrl2 = 'http://a6b85c10de9f54b0dac932cf5a2a7f29-796556045.us-east-1.elb.amazonaws.com:9191/addStudent';
  private baseUrl1 = 'http://a8727104ed448441ca45544dbdcab647-250204293.us-east-1.elb.amazonaws.com:8081/kafka/students';
  private baseUrl2 ='http://a8727104ed448441ca45544dbdcab647-250204293.us-east-1.elb.amazonaws.com:8081/kafka/addStudent';
  //https://cors-anywhere.herokuapp.com/
  constructor(private http: HttpClient) { }


  
  getStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseUrl1).pipe(catchError(this.handleError))
  }


  public postStudent(student: object) {
    return this.http.post(this.baseUrl2, student, {responseType: 'text' }).pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        'Backend error occured:', error);
    }
    return throwError(
      'unknown error occured');
  };

}
