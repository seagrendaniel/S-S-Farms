const User = require('../models/user');
const Review = require('../models/review');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login,
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

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    const token = createJWT(user);
    res.json({token});
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

/*-- Helper Function --*/

function createJWT(user) {
  return jwt.sign(
    {user},
    SECRET,
    {expiresIn: '24h'}
  );
}