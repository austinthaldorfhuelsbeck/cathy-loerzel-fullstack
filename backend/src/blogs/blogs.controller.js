const service = require("./blogs.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

/**
 * Defines the controller for blog resources
 * Includes validation for existing and new blogs
 * Includes list, create, read, update methods as well as
 * methods to sort and list by, create, and delete categories and topics
 *
 * @type {Service}
 */

// VALIDATION
async function blogExists(req, res, next) {
  let id = ""
  if (req.params.blog_id) {
    id = req.params.blog_id
  } else {
    id = req.body.data.blog_id
  }
  const blogsList = await service.read(id)
  const blog = blogsList[0]
  if (blog) {
    res.locals.blog = blog
    return next()
  }
  next({
    status: 404,
    message: `Blog ${req.params.blog_id} cannot be found.`,
  })
}
async function isValidBlog(req, res, next) {
  const blog = { ...req.body }
  let message = ""
  if (!blog.title) message += "Title required. "
  if (!blog.category) message += "Category required. "
  if (!blog.text) message += "Description required. "
  if (!blog.img) message += "Image required. "
  // returns error or sets res.locals
  if (message !== "") {
    return next({ status: 400, message })
  }
  res.locals.blog = blog
  return next()
}
async function appendData(req, res, next) {
  const { blog } = res.locals
  if (!blog.blog_id) {
    blog.blog_id = blog.title.replace(/\s/g, "-").toLowerCase()
  }
  if (!blog.topic) blog.topic = "general"
  if (!blog.date) {
    let today = new Date()
    const dd = String(today.getDate()).padStart(2, "0")
    const mm = String(today.getMonth() + 1).padStart(2, "0")
    const yyyy = today.getFullYear()
    today = mm + "-" + dd + "-" + yyyy
    blog.date = today
  }
  res.locals.blog = blog
  return next()
}

/**
 * Handlers for blog resources
 */
async function list(req, res) {
  const category = req.query.category
  const topic = req.query.topic
  let data = []
  if (category) {
    data = await service.listCategory(category)
  } else if (topic) {
    data = await service.listTopic(topic)
  } else {
    data = await service.list()
  }
  res.json({ data })
}
async function listFeatured(req, res) {
  let data = await service.listFeatured()
  res.json({ data })
}
async function create(req, res) {
  const { blog } = res.locals
  const data = await service.create(blog)
  res.status(201).json({ data })
}
function read(req, res) {
  const data = res.locals.blog
  res.json({ data })
}
async function update(req, res) {
  const data = await service.update(res.locals.blog, res.locals.blog.blog_id)
  res.json({ data: data[0] })
}
async function destroy(req, res, next) {
  const id = res.locals.blog.blog_id
  const data = await service.delete(id)
  res.status(204).json({ data })
}

module.exports = {
  list: [asyncErrorBoundary(list)],
  listFeatured: [asyncErrorBoundary(listFeatured)],
  create: [asyncErrorBoundary(isValidBlog), appendData, create],
  read: [asyncErrorBoundary(blogExists), read],
  update: [asyncErrorBoundary(blogExists), update],
  delete: [asyncErrorBoundary(blogExists), destroy],
}
