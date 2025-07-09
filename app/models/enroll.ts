//import { DateTime } from 'luxon'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import Course from './course.js'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'

export default class Enroll extends BaseModel {
  @column({ isPrimary: true })
  declare sno: number

  @column()
  declare rno: number

  @column()
  declare courseId: number

  @manyToMany(()=>Course)
  declare courses: ManyToMany<typeof Course> 
}