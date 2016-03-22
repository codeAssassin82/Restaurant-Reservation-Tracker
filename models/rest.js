'use strict';
var mongoose = require('mongoose');

var Rest = mongoose.model('Rest',{
  time: Date,
  partyName: String,
  partySize: Number,
  allergies: [String],
  checkedIn: {type:Boolean, default: false}
});

module.exports = Rest;
