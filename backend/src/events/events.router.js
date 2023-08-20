const router = require("express").Router()
const controller = require("./events.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")

/**
 * Defines the router for events resources
 *
 * @type {Router}
 */
router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed)
router
  .route("/:event_id")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed)

module.exports = router
