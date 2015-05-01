var express = require('express'),
    router = express.Router();

router.get('/masonry/', function(req, res) {
  res.render('masonry', {});
});

module.exports = router;
