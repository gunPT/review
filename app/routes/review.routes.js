module.exports = app => {
  const reviewController = require("../controllers/review.controller.js.js.js");

  var router = require("express").Router();

  // Create a reviews
  router.post("/", reviewController.create);

  // Retrieve all reviews or filtered reviews
  router.get("/", reviewController.fetchReviews);

  // Get average monthly ratings per store
  router.get("/monthlyRating", reviewController.getAverageMonthlyRating);

  //  Get total ratings for each category
  router.get("/totalRating", reviewController.getTotalRatingForCategory);

  app.use("/api/reviews", router);
};
