import React from 'react';
import './Reviews.css'; // Import the CSS styles
import gnxImage from '../photos/gnx.png'; 

const ReviewsPage = () => {
    return (
        <div className="reviews-container">
            {/* Popular Reviews Section */}
            <section className="popular-reviews">
                <h2>Popular Reviews</h2>
                <div className="review-card">
                    <img
                        src={gnxImage} // Use the imported image
                        alt="Kendrick Lamar Album Cover"
                        className="review-image"
                    />
                    <div className="review-details">
                        <h3>Kendrick Lamar - GNX</h3>
                        <p>
                            With GNX, Kendrick Lamar once again proves his ability to innovate and expand hip-hop's
                            boundaries. The album pays homage to his West Coast roots, integrating diverse influences...
                        </p>
                        <div className="rating">
                            <span>Rating</span>
                            <div className="stars">★★★★★</div>
                            <p>From 10,202 Reviews</p>
                        </div>
                        <div className="genres">
                            <h4>Genres</h4>
                            <p>Modern Hip-hop, West Coast rap</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Genres Section */}
            <section className="popular-genres">
                <h2>Popular Genres</h2>
                <div className="genre-grid">
                    <div className="genre-card">Modern Hip Hop</div>
                    <div className="genre-card">Bedroom Pop</div>
                    <div className="genre-card">Alt R&B</div>
                    <div className="genre-card">Hyper Pop</div>
                    <div className="genre-card">Indie Folk Revival</div>
                </div>
            </section>
        </div>
    );
};

export default ReviewsPage;
