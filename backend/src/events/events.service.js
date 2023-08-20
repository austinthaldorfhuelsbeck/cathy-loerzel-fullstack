const knex = require("../db/connection")

/**
 * CRUDL services for events resources
 * Create returns a list, of which we only need the first element
 */
function list() {
  return knex("events").select("*").orderBy("event_id")
}
function listType(type) {
  return knex("events as e")
    .select("*")
    .where({ "e.type": type})
    .orderBy("e.event_id")
}
function create(event) {
  return knex("events")
    .insert(event)
    .returning("*")
    .then((createdEvents) => createdEvents[0])
}
function read(id) {
  return knex("events").select("*").where({ event_id: id })
}
function update(updatedEvent, id) {
  return knex("events")
    .select("*")
    .where({ event_id: id })
    .update(updatedEvent, "*")
}
function destroy(id) {
  return knex("events").where({ event_id: id }).del()
}

module.exports = {
  list,
  listType,
  create,
  read,
  update,
  delete: destroy,
}
