var
    designModels = require('../models/design'),
    express = require('express'),
    // data..
    // mongoose = require('mongoose'),
    // db = mongoose.connection,
    // init..
    router = express.Router();

router.get('/', function(req, res) {
  res.render('index', {
        title:'Front End Stacked',
        credit: 'Matt.Dodson.Digital'
    });
});

module.exports = router;
