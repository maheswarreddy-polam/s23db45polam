const mongoose = require('mongoose');

const costumeSchema = new mongoose.Schema({
  NAME: {
    type: String,
    required: true,
    trim: true
  },
  AGE: {
    type: Number,
    required: true,
    validate: {
      validator: function(value) {
        return value >= 18 && value <= 99;
      },
      message: props => `${props.value} is not a valid age. Age must be between 18 and 99.`
    }
  },
  COLOR: {
    type: String,
    required: true,
    trim: true
  },
});

const Costume = mongoose.model('Costume', costumeSchema);

module.exports = Costume;
