
exports.up = function(knex) {
  return knex.schema.table("events", (table) => {
    table.boolean("isUpcoming")
  })
}

exports.down = function(knex) {
  return knex.schema.table("events", (table) => {
    table.dropColumn("type")
  })
}
