// Load environment variables
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

// Use the PORT from environment variables or default to 5002
const PORT = process.env.PORT || 5002;

// Environment variables
const spotifyClientId = process.env.SPOTIFY_CLIENT_ID;
const spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const NEWS_API_KEY = process.env.NEWS_API_KEY; // Access News API key

// Middleware: Enable CORS
app.use(cors());

// Middleware: JSON parsing (optional if needed later)
app.use(express.json());

// Log the Spotify Client ID and News API key to verify they're loaded
if (spotifyClientId && NEWS_API_KEY) {
    console.log(`Spotify Client ID: ${spotifyClientId}`);
    console.log(`News API Key: Loaded`);
} else {
    console.error("Error: Required environment variables are missing in .env");
}

// Root route: Simple test
app.get('/', (req, res) => {
    res.send('ReChord Backend Running');
});

// News API route
app.get('/news', async (req, res) => {
    try {
        // Fetch music-related news from News API
        const response = await axios.get('https://newsapi.org/v2/everything', {
            params: {
                q: 'music', // Query for music-related news
                apiKey: NEWS_API_KEY,
                language: 'en',
                pageSize: 10, // Limit to 10 articles
            },
        });

        // Send articles to the frontend
        res.json(response.data.articles);
    } catch (error) {
        console.error('Error fetching news:', error.response?.data || error.message);
        res.status(500).json({ message: 'Failed to fetch news' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
