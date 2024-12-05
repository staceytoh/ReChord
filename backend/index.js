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

// Mock data for Social Page
let profiles = {};
let ratings = {};
let favorites = [
    { username: 'friend1', albums: [{ title: 'Favorite Album 1', image: 'https://via.placeholder.com/150' }] },
    { username: 'friend2', albums: [{ title: 'Favorite Album 2', image: 'https://via.placeholder.com/150' }] },
    { username: 'friend3', albums: [{ title: 'Favorite Album 3', image: 'https://via.placeholder.com/150' }] },
];

// Middleware
app.use(cors());
app.use(express.json());

// Log environment variables to verify they're loaded
if (spotifyClientId && spotifyClientSecret && NEWS_API_KEY) {
    console.log(`Spotify Client ID: ${spotifyClientId}`);
    console.log(`News API Key: Loaded`);
} else {
    console.error("Error: Required environment variables are missing in .env");
}

// ----------------------------------
// Root Route
// ----------------------------------
app.get('/', (req, res) => {
    res.send('ReChord Backend Running');
});

// ----------------------------------
// News API Route
// ----------------------------------
app.get('/news', async (req, res) => {
    try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
            params: {
                q: 'music OR songs OR albums OR artists',
                apiKey: NEWS_API_KEY,
                language: 'en',
            },
        });

        const filteredArticles = response.data.articles.filter(article => {
            return (
                article.title &&
                article.description &&
                article.url &&
                article.urlToImage
            );
        });

        res.json(filteredArticles);
    } catch (error) {
        console.error('Error fetching news:', error.response?.data || error.message);
        res.status(500).json({ message: 'Failed to fetch news' });
    }
});

// ----------------------------------
// Spotify API Endpoints
// ----------------------------------
let cachedToken = null;
let tokenExpiry = null;

app.get('/spotify/token', async (req, res) => {
    const authToken = Buffer.from(`${spotifyClientId}:${spotifyClientSecret}`).toString('base64');

    if (cachedToken && Date.now() < tokenExpiry) {
        return res.json({ access_token: cachedToken });
    }

    try {
        const response = await axios.post(
            'https://accounts.spotify.com/api/token',
            new URLSearchParams({ grant_type: 'client_credentials' }),
            {
                headers: {
                    Authorization: `Basic ${authToken}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        );

        cachedToken = response.data.access_token;
        tokenExpiry = Date.now() + response.data.expires_in * 1000;
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching Spotify token:', error.response?.data || error.message);
        res.status(500).json({ message: 'Failed to fetch Spotify token' });
    }
});

app.get('/spotify/search', async (req, res) => {
    const { query } = req.query;
    const token = req.headers.authorization?.split(' ')[1];

    if (!query) {
        return res.status(400).json({ message: 'Search query is required' });
    }

    try {
        const response = await axios.get('https://api.spotify.com/v1/search', {
            headers: { Authorization: `Bearer ${token}` },
            params: { q: query, type: 'album', limit: 3 },
        });
        res.json(response.data.albums.items);
    } catch (error) {
        console.error('Error searching albums:', error.response?.data || error.message);
        res.status(500).json({ message: 'Failed to search albums' });
    }
});

// ----------------------------------
// Social Page API Endpoints
// ----------------------------------
app.post('/api/profile/:username', (req, res) => {
    const { username } = req.params;
    const { favorites } = req.body;

    if (!profiles[username]) {
        profiles[username] = {
            username,
            avatar: `https://ui-avatars.com/api/?name=${username}&background=random`,
            followers: Math.floor(Math.random() * 100),
            following: Math.floor(Math.random() * 50),
            createdAt: new Date().toISOString(),
            favorites: [],
        };
    }

    if (favorites) {
        profiles[username].favorites = favorites;
    }

    res.json({ message: 'Profile updated', profile: profiles[username] });
});

app.get('/api/profile/:username', (req, res) => {
    const username = req.params.username;

    if (!profiles[username]) {
        profiles[username] = {
            username,
            avatar: `https://ui-avatars.com/api/?name=${username}&background=random`,
            followers: Math.floor(Math.random() * 100),
            following: Math.floor(Math.random() * 50),
            createdAt: new Date().toISOString(),
            favorites: [],
        };
    }

    res.json(profiles[username]);
});

app.post('/api/ratings', (req, res) => {
    ratings = { ...ratings, ...req.body };
    res.json({ message: 'Ratings saved', ratings });
});

app.get('/api/favorites', (req, res) => {
    res.json(favorites);
});

// ----------------------------------
// Start the Server
// ----------------------------------
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
