// Load environment variables first
require('dotenv').config();

const express = require('express');
const app = express();

// Use the PORT from environment variables 
const PORT = process.env.PORT || 5002;

// Access environment variables
const spotifyClientId = process.env.SPOTIFY_CLIENT_ID;
const spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECRET;

// Log the Spotify Client ID to verify it's loaded correctly
if (spotifyClientId) {
    console.log(`Spotify Client ID: ${spotifyClientId}`);
} else {
    console.error("Error: SPOTIFY_CLIENT_ID is not defined in .env");
}

// Define a simple test route
app.get('/', (req, res) => {
    res.send('ReChord Backend Running');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
