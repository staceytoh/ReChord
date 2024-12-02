import React, { useState, useEffect } from 'react';

const NewsPage = () => {
    const [news, setNews] = useState([]);

    // Fetch news on component mount
    useEffect(() => {
        fetch('/news')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log('Data fetched:', data); // Debugging
                setNews(data || []);
            })
            .catch((error) => console.error('Error fetching news:', error));
    }, []);

    return (
        <div
            className="min-h-screen p-8"
            style={{ backgroundColor: '#333549', color: '#F0F0F0' }}
        >
            <h1 className="text-4xl font-bold mb-8 text-center">Music News</h1>

            {news.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {news.map((article, index) => (
                        <div
                            key={index}
                            className="rounded-lg shadow-md overflow-hidden"
                            style={{ backgroundColor: '#4D5069' }}
                        >
                            {article.urlToImage && (
                                <img
                                    src={article.urlToImage}
                                    alt={article.title || 'News'}
                                    className="w-full h-64 object-cover"
                                />
                            )}
                            <div className="p-6">
                                <a
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-2xl font-bold hover:text-blue-400 transition-colors"
                                    style={{ color: '#FFFFFF' }}
                                >
                                    {article.title}
                                </a>
                                <p
                                    className="mt-2 text-sm"
                                    style={{ color: '#C0C0C0' }}
                                >
                                    {article.author
                                        ? `Author: ${article.author}`
                                        : 'Unknown Author'}
                                </p>
                                <p className="mt-4" style={{ color: '#E0E0E0' }}>
                                    {article.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center">Loading news...</p>
            )}
        </div>
    );
};

export default NewsPage;
