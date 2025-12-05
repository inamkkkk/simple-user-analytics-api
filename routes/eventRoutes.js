const express = require('express');
const eventController = require('../controllers/eventController');
const { authenticate } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authenticate, eventController.createEvent);
router.get('/', authenticate, eventController.getEvents);

module.exports = router;