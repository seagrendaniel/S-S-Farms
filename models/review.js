var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
    body: { type: String, required: true },
    rating: {type: Number, min: 0, max: 5},
    user: {}
},
    {timestamps: true}
);

module.exports = mongoose.model('Review', reviewSchema);