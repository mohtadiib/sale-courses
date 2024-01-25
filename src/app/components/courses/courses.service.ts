import { Injectable } from '@angular/core';
import {CourseModel} from "../models/course_model";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  coursesList:CourseModel[] = []
  constructor() { }
}
