require('dotenv').config();

const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5002;

// Environment variables
const spotifyClientId = process.env.SPOTIFY_CLIENT_ID;
const spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECRET;

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
if (spotifyClientId) {
    console.log(`Spotify Client ID: ${spotifyClientId}`);
} else {
    console.error("Error: Spotify Client ID and Secret are missing in .env");
}

// ----------------------------------
// Root Route
// ----------------------------------
app.get('/', (req, res) => {
    res.send('ReChord Backend Running');
});

// ----------------------------------
// Spotify API Endpoints
// ----------------------------------

// Fetch Spotify token with caching
let cachedToken = null;
let tokenExpiry = null;

app.get('/spotify/token', async (req, res) => {
    const authToken = Buffer.from(`${spotifyClientId}:${spotifyClientSecret}`).toString('base64');

    // Return cached token if still valid
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

// Search Spotify albums
app.get('/spotify/search', async (req, res) => {
    const { query } = req.query;
    const token = req.headers.authorization?.split(' ')[1]; // Extract token from "Bearer <token>"

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

// Create or update a user profile
app.post('/api/profile/:username', (req, res) => {
    const { username } = req.params;
    const { favorites } = req.body;

    // Check if the user profile exists, or create a new one
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

    // Update the user's favorites
    if (favorites) {
        profiles[username].favorites = favorites;
    }

    // Return the updated profile
    res.json({ message: 'Profile updated', profile: profiles[username] });
});

// Get a user profile
app.get('/api/profile/:username', (req, res) => {
    const username = req.params.username;

    // Check if the profile exists, or create a new one
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

// Save user ratings
app.post('/api/ratings', (req, res) => {
    ratings = { ...ratings, ...req.body };
    res.json({ message: 'Ratings saved', ratings });
});

// Get friends' favorites
app.get('/api/favorites', (req, res) => {
    res.json(favorites);
});

// ----------------------------------
// Start the Server
// ----------------------------------
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
