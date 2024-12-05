import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SocialPage = () => {
    const [profile, setProfile] = useState({});
    const [favorites, setFavorites] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [albums, setAlbums] = useState([]);
    const [spotifyToken, setSpotifyToken] = useState('');
    const [profilePicture, setProfilePicture] = useState('');

    // Fetch user profile
    useEffect(() => {
        axios.get('/api/profile/defaultUser')
            .then((res) => {
                setProfile(res.data);
                setProfilePicture(res.data.avatar || '');
                setFavorites(
                    res.data.favorites.map((album) => ({
                        ...album,
                        rating: album.rating || 0,
                        comments: album.comments || [],
                    }))
                );
            })
            .catch((err) => console.error('Error fetching profile:', err));
    }, []);

    // Fetch Spotify token
    useEffect(() => {
        axios.get('/spotify/token')
            .then((res) => setSpotifyToken(res.data.access_token))
            .catch((err) => console.error('Error fetching Spotify token:', err));
    }, []);

    // Handle profile picture upload
    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setProfilePicture(reader.result);
                saveProfile({ avatar: reader.result }); // Save to backend
            };
            reader.readAsDataURL(file);
        }
    };

    // Save profile data to backend
    const saveProfile = (updatedData) => {
        axios
            .post('/api/profile/defaultUser', { ...profile, ...updatedData })
            .then((res) => {
                setProfile(res.data.profile); // Update frontend state with backend response
            })
            .catch((err) => console.error('Error saving profile:', err));
    };

    // Handle username change
    const handleUsernameChange = (newUsername) => {
        setProfile((prev) => ({ ...prev, username: newUsername }));
        saveProfile({ username: newUsername });
    };

    // Search albums
    const handleSearch = () => {
        if (!searchQuery) {
            setAlbums([]);
            return;
        }

        axios.get('/spotify/search', {
            params: { query: searchQuery },
            headers: { Authorization: `Bearer ${spotifyToken}` },
        })
        .then((res) => setAlbums(res.data))
        .catch((err) => console.error('Error searching albums:', err));
    };

    // Add album to favorites
    const handleAddToFavorites = (album) => {
        if (favorites.some((fav) => fav.id === album.id)) {
            alert('Album already in favorites!');
            return;
        }

        const updatedFavorites = [...favorites, { ...album, rating: 0, comments: [] }];
        setFavorites(updatedFavorites);
        saveProfile({ favorites: updatedFavorites }); // Save to backend
    };

    // Remove album from favorites
    const handleRemoveFromFavorites = (albumId) => {
        const updatedFavorites = favorites.filter((album) => album.id !== albumId);
        setFavorites(updatedFavorites);
        saveProfile({ favorites: updatedFavorites }); // Save to backend
    };

    // Rate a favorite album
    const handleRateAlbum = (albumId, rating) => {
        const updatedFavorites = favorites.map((album) =>
            album.id === albumId ? { ...album, rating } : album
        );
        setFavorites(updatedFavorites);
        saveProfile({ favorites: updatedFavorites }); // Save to backend
    };

    // Add a comment
    const handleAddComment = (albumId, comment) => {
        if (comment.trim().split('.').length - 1 > 5) {
            alert('Comments must be limited to 5 sentences.');
            return;
        }

        const updatedFavorites = favorites.map((album) =>
            album.id === albumId
                ? { ...album, comments: [...album.comments, comment] }
                : album
        );
        setFavorites(updatedFavorites);
        saveProfile({ favorites: updatedFavorites }); // Save to backend
    };

    return (
        <div className="p-8" style={{ backgroundColor: '#333549', color: '#F0F0F0' }}>
            {/* Profile Header */}
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    {/* Profile Picture */}
                    {profilePicture ? (
                        <img
                            src={profilePicture}
                            alt="Profile"
                            className="w-16 h-16 rounded-full"
                        />
                    ) : (
                        <div className="w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xl">P</span>
                        </div>
                    )}
                    {/* Username and Info */}
                    <div>
                        {isEditing ? (
                            <input
                                type="text"
                                value={profile.username}
                                onChange={(e) => handleUsernameChange(e.target.value)}
                                className="p-2 text-black rounded border"
                                placeholder="Enter new username"
                            />
                        ) : (
                            <h1 className="text-3xl font-bold">{profile.username || 'User Profile'}</h1>
                        )}
                        <p className="text-gray-400">{profile.following} following | {profile.followers} followers</p>
                        <p className="text-gray-400">Account created {new Date(profile.createdAt).getFullYear()}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    {/* File Input for Profile Picture */}
                    {isEditing && (
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleProfilePictureChange}
                            className="text-white mr-4"
                        />
                    )}
                    {/* Edit Button */}
                    <button
                        onClick={() => setIsEditing(!isEditing)}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        {isEditing ? 'Close' : 'Edit'}
                    </button>
                </div>
            </div>

            {/* Favorites Section */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold">Your Favorites</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    {favorites.map((album) => (
                        <div
                            key={album.id}
                            className="rounded shadow-md p-4"
                            style={{ backgroundColor: '#4D5069' }}
                        >
                            <img src={album.images[0]?.url} alt={album.name} className="w-full h-40 object-cover rounded" />
                            <p className="mt-2 text-lg font-semibold">{album.name}</p>

                            {/* Rating Section */}
                            <div className="mt-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span
                                        key={star}
                                        onClick={() => handleRateAlbum(album.id, star)}
                                        style={{
                                            cursor: 'pointer',
                                            color: album.rating >= star ? 'gold' : 'gray',
                                            fontSize: '20px',
                                        }}
                                    >
                                        ★
                                    </span>
                                ))}
                                <p className="text-sm mt-1">Rating: {album.rating} / 5</p>
                            </div>

                            {/* Comments Section */}
                            <div className="mt-4">
                                <h3 className="text-sm font-bold">Comments:</h3>
                                <ul className="mt-2 text-sm text-gray-300">
                                    {album.comments.map((comment, index) => (
                                        <li key={index}>- {comment}</li>
                                    ))}
                                </ul>
                                {isEditing && (
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            placeholder="Add a comment (max 5 sentences)"
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    handleAddComment(album.id, e.target.value);
                                                    e.target.value = '';
                                                }
                                            }}
                                            className="w-full p-2 border rounded mt-2 text-black"
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Remove Button */}
                            {isEditing && (
                                <button
                                    onClick={() => handleRemoveFromFavorites(album.id)}
                                    className="mt-2 text-sm text-red-500 hover:underline"
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Edit Mode: Search and Add Favorites */}
            {isEditing && (
                <div className="mt-8">
                    <h2 className="text-2xl font-bold">Add to Favorites</h2>
                    <div className="flex items-center mt-4">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                if (e.target.value === '') {
                                    setAlbums([]);
                                }
                            }}
                            placeholder="Search for an album"
                            className="flex-grow p-2 border rounded text-black"
                        />
                        <button
                            onClick={handleSearch}
                            className="bg-blue-500 text-white px-4 py-2 ml-2 rounded"
                        >
                            Search
                        </button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                        {albums.map((album) => (
                            <div
                                key={album.id}
                                className="rounded shadow-md p-4"
                                style={{ backgroundColor: '#4D5069' }}
                            >
                                <img src={album.images[0]?.url} alt={album.name} className="w-full h-40 object-cover rounded" />
                                <p className="mt-2 text-lg font-semibold">{album.name}</p>
                                <button
                                    onClick={() => handleAddToFavorites(album)}
                                    className="mt-2 text-sm text-green-500 hover:underline"
                                >
                                    Add to Favorites
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SocialPage;
