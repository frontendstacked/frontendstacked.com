var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    consolidate = require('consolidate'), //view engines
    resume = require('./models/resume'), // data schema
    routes = require('./routes/index'), // default routes
    swigs = require('./routes/swigs'),
    users = require('./routes/users'), // auto-generated auth stuff
    db = mongoose.connect('mongodb://localhost/fes').connection, // db conn.
    app = express(); // initialize

// HELPERS. YOU WANT THESE AT THE TOP.
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


// DATABASE CONNECTION
db.once('open', function () {console.log('[Mongoose Event] open');});
db.on('error', console.error.bind(console,'[Mongoose ERROR]'));

// VIEW ENGINE SETUP
app.set('view engine', 'jade');
app.engine('html', consolidate.swig);
app.engine('jade', consolidate.jade);
// view directories
app.set('views', [
    __dirname + '/views_jade',
    __dirname + '/views_swig'
]);
// view caching
app.set('view cache', false);

// ROUTING
// call route methods against these paths
app.use('/', routes);
// app.use('/jade', routes.jades);
app.use('/swig', swigs);
app.use('/users', users);
// static serving
app.use(express.static(path.join(__dirname, 'public')));


//==============================================================================
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
