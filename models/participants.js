const mongoose = require('mongoose');

const participants = mongoose.Schema({
  id: { type: Number, required: true },
  start_time: { type: Date, required: true },
  end_time: { type: Date, required: true },
  interview_id: { type: Numer, required: true },
});

module.exports = mongoose.model('Participants',participants  );