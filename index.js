const express = require('express');
const app = express();

// Make sure to install express via npm

/**
 * Add Middleware to log incoming requests
 * It runs for every request before reaching the route handlers
 */

/**
 * Add a route to /name that displays your name as plain text
 */
app.get('/name', (request, response) => {
    response.send('Rakeem');

/**
 * Add a route to /about that displays a JSON object with details describing yourself
 */
app.get('/about', (request, response) => {
    response.json({
        "data": {
            "name": "Rakeem",
            "age": "17",
        }
    });

/**
 * Add 404 Middleware 
 */
app.use((request, response, next) => {
    response.status(404).send('404 Not Found');
});


app.listen(3000, () => {
    console.log(`Server is running.`);
});

/**
 * Run your server and test your routes.
 */
