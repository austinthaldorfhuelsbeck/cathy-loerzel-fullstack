const service = require("./testimonials.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")
const { test } = require("../../knexfile")

/**
 * Defines the controller for testimonials resources
 * Includes validation for existing and new testimonials
 * Includes list, create, read, update methods as well as
 * delete
 *
 * @type {Service}
 */

// VALIDATION
async function testimonialExists(req, res, next) {
  let id = ""
  if (req.params.testimonial_id) {
    id = req.params.testimonial_id
  } else {
    id = req.body.data.testimonial_id
  }
  const testimonialList = await service.read(id)
  const testimonial = testimonialList[0]
  if (testimonial) {
    res.locals.testimonial = testimonial
    return next()
  }
  next({
    status: 404,
    message: `Testimonial ${req.params.testimonial_id} cannot be found.`,
  })
}
async function isValidTestimonial(req, res, next) {
  const testimonial = { ...req.body }
  let message = ""
  if (!testimonial.name) message += "Name required. "
  if (!testimonial.title) message += "Title required. "
  if (!testimonial.message) message += "Message required. "
  // returns error or sets res.locals
  if (message !== "") {
    return next({ status: 400, message })
  }
  res.locals.testimonial = testimonial
  return next()
}

/**
 * Handlers for testimonials resources
 */
async function list(req, res) {
  let data = await service.list()
  res.json({ data })
}
async function create(req, res) {
  const { testimonial } = res.locals
  const data = await service.create(testimonial)
  res.status(201).json({ data })
}
function read(req, res) {
  const data = res.locals.testimonial
  res.json({ data })
}
async function update(req, res) {
  const data = await service.update(
    res.locals.testimonial,
    res.locals.testimonial.testimonial_id
  )
  res.json({ data: data[0] })
}
async function destroy(req, res, next) {
  const id = res.locals.testimonial.testimonial_id
  const data = await service.delete(id)
  res.status(204).json({ data })
}

module.exports = {
  list: [asyncErrorBoundary(list)],
  create: [asyncErrorBoundary(isValidTestimonial), create],
  read: [asyncErrorBoundary(testimonialExists), read],
  update: [asyncErrorBoundary(testimonialExists), update],
  delete: [asyncErrorBoundary(testimonialExists), destroy],
}
