var mongoose = require('mongoose'),

// Resume -----------------------------
resumeSchema = mongoose.Schema({
    name: {type: String},
    description: String
});
exports.resumeSchema = resumeSchema;
mongoose.model('Resume', resumeSchema);
//===============================emuseR

// Job --------------------------------
// jobSchema = mongoose.Schema({
//     org: String,
//     dateline: String,
//     startDate: Date,
//     endDate: Date
// });
// exports.jobSchema = jobSchema;
// mongoose.model('Job', jobSchema);
//==================================Job
