const Event = require("./eventModel");

const createEvent = async (eventData) => {
    try {
        //Add new event to database!
        const newEvent = await Event.create(eventData);
            return newEvent
        
    } catch (error) {
        throw error
    }
        
}

const getEvents = async () =>{
    try {
        const events = await Event.find()
        return events
    } catch (error) {
        throw error        
    }
}

const getEventById = async (id) =>{
    try {
        const event = await Event.findById(id)
        return event
    } catch (error) {
        throw error        
    }
}
module.exports = {
    createEvent, getEvents, getEventById
}