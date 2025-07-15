// import { DateTime } from 'luxon'
import Staff from './staff.js'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type {BelongsTo} from '@adonisjs/lucid/types/relations'
export default class Course extends BaseModel {
  public static primaryKey = 'course_id' 
  
  @column({ isPrimary: true, columnName:'courseId' })
  declare course_id: number

  @column({ columnName: 'department' })
  declare department: string
  
  @column({ columnName: 'courseName' })
  declare course_name: string

  @column({ columnName: 'staffId' })
  declare staff_id: number

  // @column()
  // declare course_limit: number

  // @column()
  // declare course_count: number

  @belongsTo(()=> Staff)
  declare staff: BelongsTo<typeof Staff>
}