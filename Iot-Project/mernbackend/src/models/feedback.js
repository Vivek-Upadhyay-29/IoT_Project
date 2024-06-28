const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,  // Changed from Number
    required: true,
  },

  
   feedback: {
     type: String,
     required: true,
   }
  
});

// Optional validation for phone number format (example)
feedbackSchema.pre('save', function(next) {
 
  next(); // Continue saving if validation passes (or no validation implemented)
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
