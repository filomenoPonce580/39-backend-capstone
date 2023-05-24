if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors")

//define error handlers/not found
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

//enable cors for all routes & parse data into JSON
app.use(express.json())
app.use(cors())

//define routers
const moviesRouter = require("./movies/movies.router");
const reviewsRouter = require("./reviews/reviews.router");
const theatersRouter = require("./theaters/theaters.router");

//point routes to routers
app.use("/movies", moviesRouter);
app.use("/reviews", reviewsRouter);
app.use("/theaters", theatersRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
