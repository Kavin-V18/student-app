import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentName = 'Arun';
  course = 'Angular';

  getStudentDetails() {
    return {
      name: this.studentName,
      course: this.course
    };
  }
}
