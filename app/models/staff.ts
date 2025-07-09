// import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import Course from './course.js'
export default class Staff extends BaseModel {
  @column({ isPrimary: true })
  declare staffId: number

  @column()
  declare staffName:string

  // @column()
  // declare position:string

  @column()
  declare department:string

  // @column()
  // declare contact:number

  @hasOne(() => Course)
  declare course: HasOne<typeof Course>
}