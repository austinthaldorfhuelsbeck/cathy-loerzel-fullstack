const router = require("express").Router()
const controller = require("./blogs.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")

/**
 * Defines the router for blog resources
 *
 * @type {Router}
 */
router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed)
router.route("/featured").get(controller.listFeatured).all(methodNotAllowed)
router
  .route("/:blog_id")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed)

module.exports = router
