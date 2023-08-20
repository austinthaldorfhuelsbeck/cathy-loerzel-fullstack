const router = require("express").Router()
const controller = require("./testimonials.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")

/**
 * Defines the router for testimonials resources
 *
 * @type {Router}
 */
router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed)
router
  .route("/:testimonial_id")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed)

module.exports = router
