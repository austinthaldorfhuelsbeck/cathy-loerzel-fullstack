// DEPENDENCIES
if (process.env.USER) require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
// ROUTES
const blogsRouter = require("./blogs/blogs.router")
const testimonialsRouter = require("./testimonials/testimonials.router")
const eventsRouter = require("./events/events.router")
// ERROR HANDLERS
const notFound = require("./errors/notFound")
const errorHandler = require("./errors/errorHandler")

app.use(
  cors({
    origin: "*",
  })
)
app.use(express.json())

// Route handlers
app.use("/blogs", blogsRouter)
app.use("/testimonials", testimonialsRouter)
app.use("/events", eventsRouter)

// Error handlers
app.use(notFound)
app.use(errorHandler)

module.exports = app
