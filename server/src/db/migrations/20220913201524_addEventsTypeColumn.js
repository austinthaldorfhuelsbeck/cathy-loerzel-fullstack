
exports.up = function(knex) {
  return knex.schema.table("events", (table) => {
    table.string("type")
  })
}

exports.down = function(knex) {
  return knex.schema.table("events", (table) => {
    table.dropColumn("type")
  })
}
