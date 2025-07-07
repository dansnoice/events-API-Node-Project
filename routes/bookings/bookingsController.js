const Booking = require("./bookingModel");

const createBooking = async(bookingData) => {
    try {
        const newBooking = await Booking.create(bookingData)
        return newBooking
    } catch (error) {
        throw error
    }
}
const getBookings = async() => {
    try {
        bookings = await Booking.find()
        return bookings
    } catch (error) {
        throw error
    }
}

module.exports = {
    createBooking, getBookings
}