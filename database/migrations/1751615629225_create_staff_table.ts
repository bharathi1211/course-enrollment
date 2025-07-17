import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'courses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('course_id').primary()
      table.string('course_name').notNullable().unique()
      table.string('department').notNullable()
      table.integer('staff_id').references('staffId').inTable('staff').onDelete('CASCADE')
      // table.integer('courseLimit')
      // table.integer('courseCount')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}