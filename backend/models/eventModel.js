const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
    ename: {
        type: String,
        required: true,
    },
    place: {
        type: String,
    },
    edate: {
        type: String,
        required: true,
    }
    
},
    {
        timestamps: true
    }
)
const Event = mongoose.model('Events', eventSchema)
module.exports = Event;