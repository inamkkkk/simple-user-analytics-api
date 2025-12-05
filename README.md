# Simple User Analytics API

A Node.js API for tracking user events and behavior.

## Features

*   Event Tracking: Records user actions with timestamps and associated data.
*   User Identification: Identifies users through unique IDs.
*   API Authentication: (Basic implementation using environment variables, for simplicity. Production should use a robust auth system).
*   Data Storage: Stores event data in a MongoDB database.
*   API Endpoints:
    *   `/api/events` (POST):  Track a new event.
    *   `/api/events` (GET): Retrieve events with optional filtering.
    *   `/api/users/:userId/events` (GET): Retrieve events for a specific user.

## Technologies Used

*   Node.js
*   Express.js
*   MongoDB
*   Mongoose
*   jsonwebtoken (for Authentication - basic implementation via API key)
*   dotenv

## Getting Started

1.  Clone the repository.
2.  Install dependencies: `npm install`
3.  Create a `.env` file and configure the following environment variables:
    *   `PORT`: The port the server will run on (e.g., 3000)
    *   `MONGODB_URI`: The connection string for your MongoDB database.
    *   `API_KEY`: A basic API key for authenticating requests. 
4.  Run the server: `npm start`

## API Usage

### Track a new event (POST /api/events)

Request Body (JSON):


{
  "userId": "user123",
  "event": "button_click",
  "data": { "buttonId": "submit", "value": "form_data" }
}


### Retrieve events (GET /api/events)

Optional Query Parameters:

*   `userId`: Filter events by user ID.
*   `event`: Filter events by event type.
*   `startDate`: Filter events by start date (ISO format).
*   `endDate`: Filter events by end date (ISO format).

### Retrieve events for a specific user (GET /api/users/:userId/events)

## Error Handling

The API returns appropriate HTTP status codes and error messages for invalid requests or server errors.

## Authentication

All requests to the `/api/events` endpoint require authentication via an `Authorization` header.  The header should be set to `Bearer <API_KEY>`, where `<API_KEY>` is the value configured in the `.env` file. This is a simple API KEY example for this project; a real auth system should be used in production.

## Contributing

Contributions are welcome! Please submit a pull request.
