const express = require("express");
const router = express.Router();
const { createEvent, getEvents, getEventById } = require("./eventsController");

router.post("/", async (req, res) => {
  try {
    const newEvent = await createEvent(req.body);
    res.json({
      message: "Event has been successfully created",
      payload: newEvent,
    });
  } catch (error) {
    res.json({
      message: "failure",
      payload: error,
    });
  }
});
router.get("/", async (req, res) => {
  try {
    // events?category=fun&minPrice=5
    // req.query.category = fun
    // req.query.minPrice = 5
    const events = await getEvents(req.query);
    res.json({ message: "Successfully found events", payload: events });
} catch (error) {
    res.json({
        message: "failure",
        payload: error.message,
    });
}
});
router.get("/:eventID", async (req, res) => {
    try {
        const event = await getEventById(req.params.eventID)
        res.json({ message: "Successfully found event by ID", payload: event });
        
    } catch (error) {
        res.json({
          message: "failure",
          payload: error.message,
        });
        
    }
})
module.exports = router;
