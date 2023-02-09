const mongoose = require('mongoose');

const pharmacySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  statuts: {
    type: Boolean,
    default: false,
  },
  location: {
    region: {
      type: String,
      required: true,
    },
    coordinates: {
      type: [Number],
    },
  },
});

module.exports = mongoose.model('Pharmacy', pharmacySchema);
