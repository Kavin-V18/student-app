import { Component,inject  } from '@angular/core';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
     private studentService = inject(StudentService);

  student = this.studentService.getStudentDetails();
}
