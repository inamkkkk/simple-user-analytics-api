const Event = require('../models/Event');
const { isValidObjectId } = require('../utils/validation');

exports.createEvent = async (req, res, next) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    next(error);
  }
};

exports.getEvents = async (req, res, next) => {
  try {
    const filter = {};
    if (req.query.userId) {
      filter.userId = req.query.userId;
    }
    if (req.query.event) {
      filter.event = req.query.event;
    }
    if (req.query.startDate) {
      filter.timestamp = { $gte: new Date(req.query.startDate) };
    }
    if (req.query.endDate) {
      filter.timestamp = { ...filter.timestamp, $lte: new Date(req.query.endDate) };
    }

    const events = await Event.find(filter);
    res.json(events);
  } catch (error) {
    next(error);
  }
};

exports.getUserEvents = async (req, res, next) => {
    try {
      const userId = req.params.userId;
      if (!isValidObjectId(userId)) {
        return res.status(400).json({ message: 'Invalid user ID format' });
      }
  
      const events = await Event.find({ userId: userId });
      res.json(events);
    } catch (error) {
      next(error);
    }
  };