const express = require('express');
const eventController = require('../controllers/eventController');
const { authenticate } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/:userId/events', authenticate, eventController.getUserEvents);

module.exports = router;