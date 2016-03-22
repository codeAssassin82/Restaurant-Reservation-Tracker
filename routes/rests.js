'use strict'

var express = require('express');
var router = express.Router();
var Rest = require('../models/rest');

router.get('/', function(req, res) {

  Rest.find({}, function(err, rest) {
    if(err){
      console.log(err);
    }else {
      console.log('rest:', rest);
      res.send(rest)
    }
})
})

// router.post('/', function(req, res) {
//
// 	new Rest({
//     // time: Date,
//     partyName: String,
//     partySize: Number,
//     allergies: [String],e
//     checkedIn: Boolean,
// 	// outdoor: req.body.outdoor,
// 	// checked: req.body.checked
// 	})
// 	.save(function(err, newReservation) {
// 		if(err) {
// 			return res.status(400).send(err);
// 		}
// 		res.send(newReservation);
// 	})
// })
router.post('/', function(req, res) {
  Rest.create(req.body, function(err, newRest) {
    res.status(err ? 400 : 200 ).send(err || newRest)
  })

})

module.exports = router;
