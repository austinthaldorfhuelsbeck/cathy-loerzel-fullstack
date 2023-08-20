const knex = require("../db/connection")

/**
 * CRUDL services for testimonials resources
 * Create returns a list, of which we only need the first element
 */
function list() {
  return knex("testimonials").select("*").orderBy("testimonial_id")
}
function create(testimonial) {
  return knex("testimonials")
    .insert(testimonial)
    .returning("*")
    .then((createdTestimonials) => createdTestimonials[0])
}
function read(id) {
  return knex("testimonials").select("*").where({ testimonial_id: id })
}
function update(updatedTestimonial, id) {
  return knex("testimonials")
    .select("*")
    .where({ testimonial_id: id })
    .update(updatedTestimonial, "*")
}
function destroy(id) {
  return knex("testimonials").where({ testimonial_id: id }).del()
}

module.exports = {
  list,
  create,
  read,
  update,
  delete: destroy,
}
