import type { HttpContext } from '@adonisjs/core/http'
import { staffStoreSchema,staffIdSchema,staffUpdateSchema} from "#validators/staff-validator"
import StaffRepository from '../repository/StaffRepository.js'
//import { messages } from '@vinejs/vine/defaults';


export default class StaffController {
    async store({ request }:HttpContext ) {
        try {
            const staffData = await staffStoreSchema.validate(request.body())
            console.log('courseData:', staffData);
            const staff = await StaffRepository.create(staffData);
            // console.log('created');
            return {
                success: true,
                message: 'Staff created successfully',
                staff: staff
            };
        }
        catch (error) {
            throw error
        }
    }

    async index({response}: HttpContext) {
        try{
            console.log('Fetching all staffs');
            const staff = await StaffRepository.fetchAll()
            return response.ok({
                success: true,
                staff : staff
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
            const payload = await staffIdSchema.validate(params)
            const staff = await StaffRepository.fetchById(payload.staff_id)
            return{
                success: true,
                staff : staff
            };
        }
        catch (error) {
            throw error
        }
    }

    async update({request,params}: HttpContext) {
        try{
            const payload = await staffIdSchema.validate(params)
            const staffData = await staffUpdateSchema.validate(request.body())
            const staff = await StaffRepository.update(payload.staff_id, staffData)
            return{
                success: true,
                staff : staff
            };
        }
        catch (error) {
            throw error
        }
    }

    async destroy({params}: HttpContext) {
        try{
            const payload = await staffIdSchema.validate(params)
            const staff = await StaffRepository.delete(payload.staff_id)
            return{
                success: true,
                messages: 'Course deleted successfully',
                staff : staff
            };
        }
        catch (error) {
            throw error
        }
    }
}