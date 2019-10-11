const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../../controllers/reviews');
router.get('/', reviewsCtrl.getAllReviews)
router.post('/', reviewsCtrl.addReview);
router.delete('/:id', reviewsCtrl.deleteReview)
router.put('/:id', reviewsCtrl.updateReview);

module.exports = router;