const Event = require("./eventModel");

const createEvent = async (eventData) => {
  try {
    //Add new event to database!
    const newEvent = await Event.create(eventData);
    return newEvent;
  } catch (error) {
    throw error;
  }
};

const getEvents = async (filterQueries) => {
  try {
    //keep track of filters
    const queryObject = {};
    const sortObject = {};
    
    //if we have a category query
    if (filterQueries.category) {
      //add the property to our object with the query as the value
      queryObject.category = filterQueries.category;
      // filterQueries.category
      // filterQueries.minPrice
      // .find() keys - what you are trying to filter by
      // const events = await Event.find({ category: filterQueries.category });
    }
    if(filterQueries.minPrice && filterQueries.maxPrice){
        queryObject.minPrice = Number(filterQueries.minPrice)
        queryObject.maxPrice = Number(filterQueries.maxPrice)

        // greater than or equal to min
      // AND less than or equal to max
      // $gte and $lte are used in mongoose for filtering by ranges
      queryObject.price = {
        $gte: Number(filterQueries.minPrice),
        $lte: Number(filterQueries.maxPrice),
      };
    }

    if(filterQueries.sortBy){
        if(filterQueries.sortOrder === "desc"){
            sortObject[filterQueries.sortBy]=-1
        } else{
        //sortBy =1 
        //will evaluate to price - adds the price key to our sortOrder from query arguments in URL > router.req.query
        sortObject[filterQueries.sortBy] =1 //1 for asc -1 for desc
        }
    }

    // filterQueries.category
    // filterQueries.minPrice
    // .find() keys - what you are trying to filter by
    // const events = await Event.find({ category: filterQueries.category });

    // const events = await Event.find(queryObject).sort({price: -1});
    const events = await Event.find(queryObject).sort(sortObject);
    return events;
  } catch (error) {
    throw error;
  }
};
const bookedTickets = async (bookingData) => {
  try {
    const event = await getEventById(bookingData.event);
    const updatedTix = event.availableTickets - bookingData.quantity;
    const updatingEventTickets = await Event.findByIdAndUpdate(event._id, {
      availableTickets: updatedTix,
    });
    return updatingEventTickets;
  } catch (error) {
    throw error;
  }
};
const getEventById = async (id) => {
  try {
    const event = await Event.findById(id);
    return event;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  createEvent,
  getEvents,
  getEventById,
  bookedTickets,
};
