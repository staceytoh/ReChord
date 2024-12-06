import React from 'react';

const HomePage = () => {
    const handleLoginWithSpotify = () => {
        // Redirect to Spotify login
        window.location.href = '/api/spotify/login'; // Replace with the correct Spotify login API endpoint
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            {/* Hero Section */}
            <div className="container mx-auto text-center py-16">
                <h1 className="text-5xl font-bold mb-4 animate-fade-in">
                    Welcome to ReChord!
                </h1>
                <p className="text-lg text-gray-300 mb-8 animate-fade-in">
                    No need to create an account! Jumpstart your experience by logging in with Spotify. Rate your playlists, discover songs, and explore music effortlessly.
                </p>
                <button
                    onClick={handleLoginWithSpotify}
                    className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-lg transition-transform transform hover:scale-105 animate-bounce"
                >
                    Login with Spotify
                </button>
            </div>

            {/* Features Section */}
            <div className="container mx-auto py-12">
                <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-gray-800 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold mb-2">Discover Songs & Artists</h3>
                        <p className="text-gray-400">
                            Search for your favorite songs or explore new artists.
                        </p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold mb-2">Personalized Playlists</h3>
                        <p className="text-gray-400">
                            Create and manage your own playlists.
                        </p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold mb-2">Rate and Review</h3>
                        <p className="text-gray-400">
                            Rate songs and see what others think.
                        </p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold mb-2">Music News</h3>
                        <p className="text-gray-400">
                            Stay updated with the latest music trends and news.
                        </p>
                    </div>
                </div>
            </div>

            {/* About Us Section */}
            <div className="bg-gray-800 py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">About Us</h2>
                    <p className="text-gray-400 max-w-3xl mx-auto">
                        ReChord is your go-to platform for discovering music, creating playlists,
                        and sharing your favorite songs with friends. Dive into the world of music
                        with ease and excitement.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
