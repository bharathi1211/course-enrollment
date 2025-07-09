import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'courses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('courseId').primary()
      table.string('courseName').notNullable().unique()
      table.integer('staffId').references('staffId').inTable('staff').onDelete('CASCADE')
      // table.integer('courseLimit')
      // table.integer('courseCount')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}