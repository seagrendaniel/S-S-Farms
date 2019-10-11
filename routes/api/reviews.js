const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');
router.post('/', usersCtrl.addReview);
router.delete('/:id', usersCtrl.deleteReview)
router.put('/:id', usersCtrl.updateReview);

module.exports = router;