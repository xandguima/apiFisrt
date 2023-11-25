
exports.up =knex=>knex.schema.createTable("notesMovie",table=>{
  table.increments("id")
  table.text("title").notNullable()
  table.text("description").notNullable()
  table.integer("score").notNullable()

  table.integer("user_id").references("id").inTable("users")

  table.timestamp("created_at").default(knex.fn.now())
  table.timestamp("updated_at").default(knex.fn.now())
})

exports.down = knex=>knex.schema.dropTable("notesMovie") 