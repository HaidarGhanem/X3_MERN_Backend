const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    testimonial: String
});

module.exports = mongoose.model('Testimonial', testimonialSchema);