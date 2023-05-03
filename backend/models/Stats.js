const mongoose = require('mongoose');

const StatsSchema = new mongoose.Schema({
    label: {
        type: String,
        required: true
    },
    value: { 
        type: Number,
        required: true
    }
});

const stat = mongoose.model('Stats', StatsSchema)
module.exports = stat;