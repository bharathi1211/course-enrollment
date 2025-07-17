import Course from "#models/course";
import { log } from "console";

export default class CoursesRepository {
   static async create(courseData : any) {
      const course = await Course.create({
        course_name: courseData.course_name,
        staff_id: courseData.staff_id,
        department: courseData.department,
        course_id: courseData.course_id
        });
      return course;
  }

  static async fetchAll(){
      const courses = await Course.all()
      console.log(courses);
      return courses;
  }
  
  static async fetchById(id: number){
      const course = await Course.findOrFail(id);
      return course;
  }

  static async update(id: number, courseData: any) {
    const course = await Course.findOrFail(id);
    console.log(course);
    console.log(courseData);
    course.merge(courseData);
    return course.save();
}

  static async delete(id: number) {
    const course = await Course.findOrFail(id);
    return course.delete();
  }
}