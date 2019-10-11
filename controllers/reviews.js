const User = require('../models/user');
const Review = require('../models/review');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
  addReview,
  deleteReview,
  updateReview
};

async function updateReview(req, res) {
  const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedReview);
}

async function deleteReview(req, res) {
  const deletedReview = await Review.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedReview);
}

async function addReview(req, res) {
  console.log("===============", req.body)
  const review = await Review.create(req.body);
  console.log("===============", review)
  res.status(201).json(review);
}

