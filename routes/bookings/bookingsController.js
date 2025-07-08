const Booking = require("./bookingModel");
const { getEventById, bookedTickets } = require("../events/eventsController");

const createBooking = async (bookingData) => {
  try {
    const event = await getEventById(bookingData.event);

    const calculatedBookingData = {
      user: bookingData.user,
      event: bookingData.event,
      quantity: bookingData.quantity,
      status: bookingData.status,
      totalPrice: bookingData.quantity * event.price,
    };
    const newBooking = await Booking.create(calculatedBookingData);
    await bookedTickets(bookingData);
    return newBooking;
  } catch (error) {
    throw error;
  }
};
const getBookings = async () => {
  try {
    bookings = await Booking.find()
      .populate("user", "username email -_id")
      .populate("event", "title -_id");
    return bookings;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  createBooking,
  getBookings,
};
