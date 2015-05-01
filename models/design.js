var mongoose = require('mongoose');

//Color
colorSchema = mongoose.Schema({
    name: String,
    hex: String
});

exports.colorShema = colorSchema;
mongoose.model('Color', colorSchema);

//BG
backgroundSchema = mongoose.Schema({
    name: String,
    uri: String
});

exports.backgroundShema = backgroundSchema;
mongoose.model('Background', backgroundSchema);

//Grids
gridSchema = mongoose.Schema({
    gridsterData: String
});

exports.gridShema = gridSchema;
mongoose.model('Grid', gridSchema);


