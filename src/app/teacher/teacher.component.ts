import { Component } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {
  constructor(){
  }
  
  TeacherArray: [string, number][] = [["Teacher1 ", 5],["Teacher2 ", 3]];
  studentsArray: string[] = ["student1", "student2", "student3", "student4", "student5"];


  stdList: string[] = [];
  show: boolean = false;
  click:boolean = false;

  students(teacherName: string) {
    const selectedTeacher = this.TeacherArray.find(teacher => teacher[0] === teacherName);
    let numberOfStudents: number = 0;
  
    if (selectedTeacher) {
      numberOfStudents = Number(selectedTeacher[1]);
    }
  
    this.stdList = this.studentsArray.slice(0, numberOfStudents);
    this.show = true;
  }
  
}
