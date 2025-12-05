const dotenv = require('dotenv');
dotenv.config();

const apiKey = process.env.API_KEY;

exports.authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'No authorization header provided' });
  }

  const token = authHeader.split(' ')[1];

  if (token !== apiKey) {
    return res.status(401).json({ message: 'Invalid API Key' });
  }

  next();
};
