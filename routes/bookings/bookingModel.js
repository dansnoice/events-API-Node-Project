const mongoose = require("mongoose");
const User = require("../users/userModel")
const Event = require("../events/eventModel")
const ObjectId = mongoose.Schema.Types.ObjectId

const bookingSchema = new mongoose.Schema({
    user: {
        type: ObjectId,
        ref: "User",
        required: true
    },
    event: {
        type: ObjectId,
        ref: "Event",
        required: true
    },
    quantity: {
        type:Number,
        min: 1,
        required: true
    },
    totalPrice: {
        //we calculate the actual price elsewhere, this just establishes the relationship
        type: Number,
        // required: true
    },
    status: {
        type: String,
        // required: true,
        default: "confirmed"
    }
})

const Booking = mongoose.model("Booking", bookingSchema)
module.exports = Booking