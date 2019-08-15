var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Dates
        // default: function() { One year from date created
        //     return
        // }
    }
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);