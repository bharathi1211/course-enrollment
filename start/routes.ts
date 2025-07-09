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
import { middleware } from './kernel.js'
// import auth from '@adonisjs/auth/services/main'
// const c = new CoursesController()
router.group(()=>{
    router.post('/add',[CoursesController,'store']),
    router.get('/', [CoursesController,'index']),
    router.get('/:course_id',[CoursesController,'show'])
    router.put('/:course_id',[CoursesController,'update'])
    router.delete('/:course_id',[CoursesController,'destroy'])
}).prefix('/admin/course').use(middleware.auth())
