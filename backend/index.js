require('dotenv').config();

const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

const PORT = process.env.PORT || 5002;

// Environment variables
const spotifyClientId = process.env.SPOTIFY_CLIENT_ID;
const spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const NEWS_API_KEY = process.env.NEWS_API_KEY; 
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
        const response = await axios.get('https://newsapi.org/v2/everything', {
            params: {
                q: 'music OR songs OR albums OR artists', // Search for specific news
                apiKey: NEWS_API_KEY,
                language: 'en', // Optional: Only return English articles
                // pageSize: 100, // Optional: number of articles per request
            },
        });

        // Filter out articles with missing key properties
        const filteredArticles = response.data.articles.filter(article => {
            return (
                article.title && 
                article.description && 
                article.url && 
                article.urlToImage 
            );
        });

        res.json(filteredArticles); // Send filtered articles to the frontend
    } catch (error) {
        console.error('Error fetching news:', error.response?.data || error.message);
        res.status(500).json({ message: 'Failed to fetch news' });
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
