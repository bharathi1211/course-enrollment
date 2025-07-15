import vine from '@vinejs/vine'
import db from '@adonisjs/lucid/services/db'

export const courseStoreSchema = vine.compile(
  vine.object({
  course_name: vine.string().maxLength(100),
  department: vine.string().maxLength(50),
  staff_id: vine.number().exists(async (db, value) => {
    const exists = await db.from('staff').where('staffId', value).first()
    return !!exists
  }),
  course_id: vine.number().unique(async (db,value)=>{
    const exists = await db.from('courses').where('courseId',value).first()
    console.log("Entered validating function: ", exists)
    return !exists
  })
}))

export const CourseIdSchema = vine.compile(
  vine.object({
    course_id: vine.number().exists(async (db, value) => {
      console.log("Entered validating function: ", value)
      const exists = await db.from('courses').where('courseId', value).first()
      return !!exists
    })
  })
)

export const courseUpdateSchema = vine.compile(
  vine.object({
  course_name: vine.string().maxLength(100),
  staff_id: vine.number().exists(async (db, value) => {
    const exists = await db.from('staff').where('staffId', value).first()
    return !!exists
  })
}))