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
        type: Date,
        default: function() {
            var oneYear = new Date();
            oneYear.setFullYear(oneYear.getFullYear() + 1);
            return oneYear.toLocaleDateString();
        }
    }
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);