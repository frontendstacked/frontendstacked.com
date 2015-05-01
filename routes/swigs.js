var express = require('express'),
    // jades = require('./jades'),
    mongoose = require('mongoose'),
    designModels = require('../models/design'),
    db = mongoose.connection,
    Color = db.model('Color', designModels.colorSchema),
    Background = db.model('Background', designModels.backgroundSchema),
    Grid = db.model('Grid', designModels.gridSchema),
    router = express.Router();

// // SUB-ROUTES
// router.jades = jades;

// GET home page.
router.get('/', function (req, res) {
  res.render('index.html', { title: 'Express' });
});
router.get('/map/', function (req, res) {
  res.render('imagemap', { title: 'ImageMap' });
});
router.get('/grid/', function (req, res) {
    var data = {};
    Color.find({name:/.*/}, function (err, colors) {
        if (err) return console.error(err);
        data.colors = colors;
        Background.find({name:/.*/}, function (err, bgs) {
            if (err) return console.error(err);
            data.bgs = bgs;
            res.render('gridster.html', data);
        });
    });
});
router.get('/grid/raw/', function (req, res) {
    var data = {};
    Grid.find({name:/.*/}, function (err, bgs) {
        if (err) return console.error(err);
        data.bgs = bgs;
        res.render('gridster.html', data);
    });
});
router.post('/grid/create/', function (req, res) {
    Grid.create({
        gridsterData: req.body.gridsterData
    }, function (err, grid) {
        if (err) return console.error(err);
        res.send(grid);
    });
});
router.get('/media/raw/', function (req, res) {
    var data = {};
    Color.find({name:/.*/}, function (err, colors) {
        if (err) return console.error(err);
        data.Color = colors;
        Background.find({name:/.*/}, function (err, bgs) {
            if (err) return console.error(err);
            data.Background = bgs;
            res.send(data);
        });
    });
});
// GET colors page.
router.get('/colors/', function (req, res) {
    Color.find({name:/.*/}, function (err, colors) {
        if (err) return console.error(err);
        res.render('colors.html', {
            colors: colors
        });
    });
});
// GET colors as json.
router.get('/bg/raw/', function (req, res) {
    Background.find({name:/.*/}, function (err, bgs) {
        if (err) return console.error(err);
        res.send(bgs);
    });
});
// POST colors
router.post('/colors/add/', function (req, res) {
    Color.create({
        name: req.body.name,
        hex: req.body.hex
    }, function (err, color) {
        if (err) return console.error(err);
        res.redirect('/colors/');
    });
});
// GET delete color
router.get('/colors/delete/:id', function (req, res) {
    Color.findByIdAndRemove(req.params.id, function (err, color) {
        if (err) return console.error(err);
        res.redirect('/colors/');
    });
});

module.exports = router;
