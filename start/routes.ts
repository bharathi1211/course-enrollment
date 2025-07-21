/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import CoursesController from '../app/controllers/courses_controller.js'
import authJwt from '#middleware/auth'
//import Staff from '#models/staff'
import StaffController from '../app/controllers/staff_controller.js'
import AuthController from '../app/controllers/auth_controller.js'

router.post('/login', [AuthController,'login'])

router.group(()=>{
    router.post('/add',[CoursesController,'store']),
    router.get('/', [CoursesController,'index']),
    router.get('/:course_id',[CoursesController,'show']),
    router.put('/:course_id',[CoursesController,'update']),
    router.delete('/:course_id',[CoursesController,'destroy'])
}).prefix('/admin/course').use(authJwt)

router.group(()=>{
    router.get('/',[StaffController,'index']),
    router.post('/add',[StaffController,'store']),
    router.put('/:staff_id',[StaffController,'update']),
    router.delete('/:staff_id',[StaffController,'destroy'])
}).prefix('/admin/staff').use(authJwt)
