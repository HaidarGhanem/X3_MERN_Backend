const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
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
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
