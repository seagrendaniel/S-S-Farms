var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
    body: { type: String, required: true },
},
    {timestamps: true}
);

module.exports = mongoose.model('Review', reviewSchema);