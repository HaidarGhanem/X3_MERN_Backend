const mongoose = require('mongoose');

const visionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'], 
    minlength: [3, 'Title must be at least 3 characters long'], 
    maxlength: [50, 'Title cannot exceed 50 characters'], 
  },
  icon: {
    type: String,
    required: [true, 'Icon is required'], 
    match: [/^.*\.(jpg|jpeg|png|gif)$/i, 'Icon must be an image URL'], 
    trim: true, 
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    minlength: [10, 'Description must be at least 10 characters long'], 
    maxlength: [200, 'Description cannot exceed 200 characters'], 
    trim: true, 
  },
}, { timestamps: true });

module.exports = mongoose.model('Vision', visionSchema);
