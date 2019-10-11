const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');
router.post('/', usersCtrl.addReview);

module.exports = router;