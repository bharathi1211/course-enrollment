import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'staff'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('staffId').primary()
      table.string('staffName').notNullable()
      table.string('department')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}