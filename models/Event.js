const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  event: {
    type: String,
    required: true
  },
  data: {
    type: mongoose.Schema.Types.Mixed
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Event', eventSchema);