const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
// title (string)
title :{
    type: String,
    required: true,
    unique: true
}, description: {
    type: String,
    default: ""
},date: {
    type: Date,
    required: true,
}, location: {
    type: String,
    required: true,
}, category: {
    type: String,
    default: ""
}, price: {
    type: Number,
    default: 0,
    min: 0
}, availableTickets: {
    type: Number,
    default: 100,
    min: 0
}
},
{timestamps: true}
// description (string)
// date (date)
// location (string)
// category (string) (e.g., concert, conference, workshop)
// price (number)
// availableTickets (number)
)

const Event = mongoose.model("Event", eventSchema)
module.exports = Event