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
import Staff from '#models/staff'
import StaffController from '../app/controllers/staff_controller.js'
// import auth from '@adonisjs/auth/services/main'
// const c = new CoursesController()
// start/routes.ts
// router.post('/login', async ({ request, auth }) => {
//   const { username, password } = request.only(['username', 'password']);

//   if (username === 'admin' && password === '1234') {
//     const token = await auth.use('api').generate({ id: 1 }); // dummy user
//     return { token: token.token };
//   }

//   return { error: 'Invalid credentials' };
// });

router.group(()=>{
    router.post('/add',[CoursesController,'store']),
    router.get('/', [CoursesController,'index']),
    router.get('/:course_id',[CoursesController,'show']),
    router.put('/:course_id',[CoursesController,'update']),
    router.delete('/:course_id',[CoursesController,'destroy'])
}).prefix('/admin/course').use(middleware.auth())

router.group(()=>{
    router.get('/',[StaffController,'index']),
    router.post('/add',[StaffController,'store'])
}).prefix('/admin/staff').use(middleware.auth())
