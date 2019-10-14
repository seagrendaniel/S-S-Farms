const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../../controllers/reviews');

router.get('/', reviewsCtrl.getAllReviews)
router.post('/', reviewsCtrl.addReview);

/*---------- Protected Routes ----------*/
// Process the token for only the routes below
router.use(require('../../config/auth'));
router.delete('/:id', checkAuth, reviewsCtrl.deleteReview)
router.put('/:id', checkAuth, reviewsCtrl.updateReview);

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;