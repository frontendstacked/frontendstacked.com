var
    designModels = require('../models/design'),
    fs = require('fs'),
    path = require('path'),
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
router.get('/resume', function(req, res) {
  var dataPath = path.join(__dirname, '../data/resume_content.json'),
      buffer = fs.readFileSync(dataPath, 'utf8'),
      json = JSON.parse(buffer);
  res.render('resume/main', {
    title: 'Resume',
    resume_content: json
  });
});

module.exports = router;
