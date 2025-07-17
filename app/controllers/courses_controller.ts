import type { HttpContext } from '@adonisjs/core/http'
import { courseStoreSchema, CourseIdSchema ,courseUpdateSchema} from "#validators/course-validator"
import CoursesRepository from '../repository/CoursesRepository.js'
import { messages } from '@vinejs/vine/defaults';
import { log } from 'console';


export default class CoursesController {
    async store({ request }:HttpContext ) {
        try {
            const courseData = await courseStoreSchema.validate(request.body())
            console.log('courseData:', courseData);
            const course = await CoursesRepository.create(courseData);
            // console.log('created');
            return {
                success: true,
                message: 'Course created successfully',
                course: course
            };
        }
        catch (error) {
            throw error
        }
    }

    async index({response}: HttpContext) {
        try{
            console.log('Fetching all courses');
            const courses = await CoursesRepository.fetchAll()
            return response.ok({
                success: true,
                course : courses
            });
        }
        catch (error) {
            throw error
        }
    }
//     async index({ response }: HttpContext) {
//     console.log('📦 Controller is running!')
//     return response.ok({
//       success: true,
//       course: [{ id: 1, name: 'Dummy Course' }],
//     })
//   }

    async show({params}: HttpContext) {
        try{
            const payload = await CourseIdSchema.validate(params)
            const courses = await CoursesRepository.fetchById(payload.course_id)
            return{
                success: true,
                course : courses
            };
        }
        catch (error) {
            throw error
        }
    }

    async update({request,params}: HttpContext) {
        try{
            const payload = await CourseIdSchema.validate(params)
            //console.log('requestbody:', request.body());
            const courseData = await courseUpdateSchema.validate(request.body())
            // console.log('courseData:', courseData);
            const courses = await CoursesRepository.update(payload.course_id, courseData)
            return{
                success: true,
                course : courses
            };
        }
        catch (error) {
            throw error
        }
    }

    async destroy({params}: HttpContext) {
        try{
            const payload = await CourseIdSchema.validate(params)
            const courses = await CoursesRepository.delete(payload.course_id)
            return{
                success: true,
                messages: 'Course deleted successfully',
                course : courses
            };
        }
        catch (error) {
            throw error
        }
    }
}