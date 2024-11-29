const mongoose = require('mongoose');

const supportSchema = new mongoose.Schema({
  icon: {
    type: String,
    required: [true, 'Icon is required'], 
    trim: true,
  },
  operationName: {
    type: String,
    required: [true, 'Operation name is required'], 
    minlength: [3, 'Operation name must be at least 3 characters long'],
    maxlength: [50, 'Operation name cannot exceed 50 characters'], 
  },
  description: {
    type: String,
    required: [true, 'Description is required'], 
    minlength: [10, 'Description must be at least 10 characters long'], 
    maxlength: [200, 'Description cannot exceed 200 characters'], 
  },
}, { timestamps: true });

module.exports = mongoose.model('Support', supportSchema);
