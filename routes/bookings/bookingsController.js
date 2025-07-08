const Booking = require("./bookingModel");
const { getEventById, bookedTickets } = require("../events/eventsController");
const { userBookedUpdate } = require("../users/usersController");

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
    await userBookedUpdate(newBooking);
    return newBooking;
  } catch (error) {
    throw error;
  }
};
const getBookings = async () => {
  try {
    bookings = await Booking.find()
      .populate("user", "-bookedEvent -_id")
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
