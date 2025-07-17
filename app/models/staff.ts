// import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import Course from './course.js'
export default class Staff extends BaseModel {
  @column({ isPrimary: true ,columnName:'staff_id' })
  declare staffId: number

  @column({ columnName: 'staff_name' })
  declare staffName:string

  @column({ columnName: 'department' })
  declare department:string

  @hasOne(() => Course)
  declare course: HasOne<typeof Course>
}