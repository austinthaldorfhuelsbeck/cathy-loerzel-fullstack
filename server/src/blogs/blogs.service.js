const knex = require("../db/connection")

/**
 * CRUDL services for blog resources
 * Create returns a list, of which we only need the first element
 */
function list() {
  return knex("blogs").select("*").orderBy("order")
}
function listCategory(category) {
  return knex("blogs as b")
    .select("*")
    .where({ "b.category": category })
    .orderBy("b.order")
}
function listTopic(topic) {
  return knex("blogs as b")
    .select("*")
    .where({ "b.topic": topic })
    .orderBy("b.order")
}
function listFeatured() {
  return knex("blogs as b")
    .select("*")
    .where({ "b.featured": true })
    .orderBy("b.order")
}
function create(blog) {
  return knex("blogs")
    .insert(blog)
    .returning("*")
    .then((createdBlogs) => createdBlogs[0])
}
function read(id) {
  return knex("blogs as b").select("*").where({ "b.blog_id": id })
}
function update(updatedBlog, id) {
  return knex("blogs")
    .select("*")
    .where({ blog_id: id })
    .update(updatedBlog, "*")
}
function destroy(id) {
  return knex("blogs").where({ blog_id: id }).del()
}

module.exports = {
  list,
  listCategory,
  listTopic,
  listFeatured,
  create,
  read,
  update,
  delete: destroy,
}
