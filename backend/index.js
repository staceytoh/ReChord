// Load environment variables first
require('dotenv').config();

const express = require('express');
const axios = require('axios');
const app = express();

// Use the PORT from environment variables 
const PORT = process.env.PORT || 5002;

// Access environment variables
const spotifyClientId = process.env.SPOTIFY_CLIENT_ID;
const spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const NEWS_API_KEY = process.env.NEWS_API_KEY; // Access News API key

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

// News API route
app.get('/news', async (req, res) => {
    try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
            params: {
                q: 'music', // Query for music-related news
                apiKey: NEWS_API_KEY,
                language: 'en',
                pageSize: 10, // Limit to 10 articles
            },
        });
        res.json(response.data.articles); // Send articles to the frontend
    } catch (error) {
        console.error('Error fetching news:', error.response?.data || error.message);
        res.status(500).json({ message: 'Failed to fetch news' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
