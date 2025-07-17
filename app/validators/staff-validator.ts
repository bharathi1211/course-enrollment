import vine from '@vinejs/vine'
import db from '@adonisjs/lucid/services/db'

export const staffStoreSchema = vine.compile(
  vine.object({
  staff_name: vine.string().maxLength(100),
  department: vine.string().maxLength(50),
  staff_id: vine.number().unique(async (db,value)=>{
    const exists = await db.from('staff').where('staff_id',value).first();
    return !exists;
  })
}))

export const staffIdSchema = vine.compile(
  vine.object({
    staff_id: vine.number().exists(async (db, value) => {
      console.log("Entered validating function: ", value)
      const exists = await db.from('staff').where('staff_id', value).first()
      return !!exists
    })
  })
)

export const staffUpdateSchema = vine.compile(
  vine.object({
  staff_name: vine.string().maxLength(100),
  department: vine.string().maxLength(50),
}))