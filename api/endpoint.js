// API ENDPOINT EXAMPLE
// This would be a real backend endpoint in production
// For this demo, we use client-side random selection

// GET /api/secret
// Returns one random secret

// Example Response:
/*
{
    "id": 3,
    "text": "i have a secret",
    "hero": "im batman",
    "drawingUrl": "img/batman.gif"
}
*/

// Simple Express.js implementation example:
/*
const express = require('express');
const app = express();

const secrets = [
    { id: 1, text: "i have a secret", hero: "im iron man", drawingUrl: "img/ironman.gif" },
    { id: 2, text: "i have a secret", hero: "im spider man", drawingUrl: "img/spiderman.gif" },
    // ... more heroes
];

app.get('/api/secret', (req, res) => {
    const random = secrets[Math.floor(Math.random() * secrets.length)];
    res.json(random);
});

app.listen(3000);
*/

// For this front-end only demo, the get_secret() function in app.js
// simulates this API call with local data
