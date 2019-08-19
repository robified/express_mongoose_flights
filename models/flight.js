var mongoose = require('mongoose');

var Schema = mongoose.Schema; // optional shortcut to the mongoose.Schema class


var destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA']
    },
    arrival: {
        type: Date
    }
}, {
    timestamps: true
});

var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        required: true
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },
    departs: {
        type: Date,
        default: function() {
            var oneYear = new Date();
            oneYear.setFullYear(oneYear.getFullYear() + 1);
            return oneYear.toLocaleDateString();
        }
    },
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA'],
        default: 'SEA'
    },
    destinations: [destinationSchema],
    tickets: [{
        type: Schema.Types.ObjectId,
        ref: 'Ticket'        
    }]
}, {
    timestamps: true
});


// Compile the schema into a model and export it
// When we want to use 'Flights', it'll get lowercase and pluralized
module.exports = mongoose.model('Flight', flightSchema);