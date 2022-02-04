# Shared Trip

Shared Trip is a test application created with Express.js, Handlebards and Mongoose

## Installation

Use the package manager to install the modules.

```bash
npm install
```

## Application initialization

To start the application please use the below command

```bash
npm start
```

## Usage

The application supports the following actions:

-   user registration, login and logout
-   creation of shared trips (for logged in users)
-   all shared trips page
-   details page for each post with different actions depending if user is logged in or is creator of the trip
-   edit and delete options for creator of the trip
-   option to book a trip for logged in users who are not creator of the trip
-   information about the users who have booked the trip and available seats
-   profile page shows count and details about user created trips
