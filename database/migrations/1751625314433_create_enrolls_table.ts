import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'enrolls'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('sno')
      table.integer('rno').references('rno').inTable('students').onDelete('CASCADE')
      table.integer('courseId').references('courseId').inTable('courses').onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}