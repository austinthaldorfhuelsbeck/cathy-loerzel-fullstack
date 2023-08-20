const service = require("./events.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")
const { test } = require("../../knexfile")

/**
 * Defines the controller for events resources
 * Includes validation for existing and new events
 * Includes list, create, read, update methods as well as
 * delete
 *
 * @type {Service}
 */

// VALIDATION
async function eventExists(req, res, next) {
  let id = ""
  if (req.params.event_id) {
    id = req.params.event_id
  } else {
    id = req.body.data.event_id
  }
  const eventList = await service.read(id)
  const event = eventList[0]
  if (event) {
    res.locals.event = event
    return next()
  }
  next({
    status: 404,
    message: `event ${req.params.event_id} cannot be found.`,
  })
}
async function isValidEvent(req, res, next) {
  const event = { ...req.body }
  let message = ""
  if (!event.name) message += "Name required. "
  if (!event.date) message += "Date required. "
  if (!event.content) message += "Content required. "
  // returns error or sets res.locals
  if (message !== "") {
    return next({ status: 400, message })
  }
  res.locals.event = event
  return next()
}

/**
 * Handlers for events resources
 */
async function list(req, res) {
  const type = req.query.type
  let data = []
  if (type) {
    data = await service.listType(type)
  } else {
    data = await service.list()
  }
  res.json({ data })
}
async function create(req, res) {
  const { event } = res.locals
  const data = await service.create(event)
  res.status(201).json({ data })
}
function read(req, res) {
  const data = res.locals.event
  res.json({ data })
}
async function update(req, res) {
  const data = await service.update(res.locals.event, res.locals.event.event_id)
  res.json({ data: data[0] })
}
async function destroy(req, res, next) {
  const id = res.locals.event.event_id
  const data = await service.delete(id)
  res.status(204).json({ data })
}

module.exports = {
  list: [asyncErrorBoundary(list)],
  create: [asyncErrorBoundary(isValidEvent), create],
  read: [asyncErrorBoundary(eventExists), read],
  update: [asyncErrorBoundary(eventExists), update],
  delete: [asyncErrorBoundary(eventExists), destroy],
}
