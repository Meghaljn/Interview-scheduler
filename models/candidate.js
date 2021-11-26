const mongoose = require('mongoose');

const candidate = mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  resume: { type: File, required: false },
  
});

module.exports = mongoose.model('Candidate', candidate);