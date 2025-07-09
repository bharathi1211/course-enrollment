import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'students'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('rno').primary()
      table.string('name').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}