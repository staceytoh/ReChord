import React from 'react';
import './Reviews.css'; // Import the CSS styles
import gnxImage from '../photos/gnx.png'; 
import tsImage from '../photos/midnights.png'; 
import mbImage from '../photos/wdty.png'; 
import drakeImage from '../photos/fatd.png'; 
import fredImage from '../photos/tendays.png'; 
import sabrinaImage from '../photos/sns.png'; 
import billieImage from '../photos/hmhas.png'; 
import tylerImage from '../photos/chromakopia.png'; 

const ReviewsPage = () => {
    return (
        <div className="reviews-container">
            {/* Popular Reviews Section */}
            <section className="popular-reviews">
                <h2>Popular Reviews</h2>

                {/* Kendrick Lamar's Album */}
                <div className="review-card">
                    <img
                        src={gnxImage}
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
                            <p>From 6,202 Reviews</p>
                        </div>
                        <div className="genres">
                            <h4>Genres</h4>
                            <p>Modern Hip-hop, West Coast rap</p>
                        </div>
                    </div>
                </div>

                {/* Taylor Swift's Album */}
                <div className="review-card">
                    <img
                        src={tsImage}
                        alt="Taylor Swift Album Cover"
                        className="review-image"
                    />
                    <div className="review-details">
                        <h3>Taylor Swift - Midnight Dreams</h3>
                        <p>
                            Midnight Dreams takes Taylor Swift's storytelling to new heights. The album is a journey
                            through themes of introspection, love, and the complexities of modern relationships, set
                            against a dreamlike pop backdrop...
                        </p>
                        <div className="rating">
                            <span>Rating</span>
                            <div className="stars">★★★★☆</div>
                            <p>From 15,784 Reviews</p>
                        </div>
                        <div className="genres">
                            <h4>Genres</h4>
                            <p>Dream Pop, Indie Pop</p>
                        </div>
                    </div>
                </div>

                {/* Metro Boomin & Future's Album */}
                <div className="review-card">
                    <img
                        src={mbImage}
                        alt="Metro Boomin & Future Album Cover"
                        className="review-image"
                    />
                    <div className="review-details">
                        <h3>Metro Boomin & Future - We Don't Trust You</h3>
                        <p>
                            We Don't Trust You is a bold collaboration between Metro Boomin and Future, blending dark,
                            trap-infused beats with Future's signature storytelling about life's highs and lows...
                        </p>
                        <div className="rating">
                            <span>Rating</span>
                            <div className="stars">★★★★☆</div>
                            <p>From 12,634 Reviews</p>
                        </div>
                        <div className="genres">
                            <h4>Genres</h4>
                            <p>Trap, Southern Hip-hop</p>
                        </div>
                    </div>
                </div>

                {/* Drake's Album */}
                <div className="review-card">
                    <img
                        src={drakeImage}
                        alt="Drake Album Cover"
                        className="review-image"
                    />
                    <div className="review-details">
                        <h3>Drake - For All the Dogs</h3>
                        <p>
                            For All the Dogs showcases Drake's exploration of personal growth, fame, and relationships
                            through a mix of melodic tracks and introspective lyrics that resonate with his fans...
                        </p>
                        <div className="rating">
                            <span>Rating</span>
                            <div className="stars">★★★★☆</div>
                            <p>From 12,458 Reviews</p>
                        </div>
                        <div className="genres">
                            <h4>Genres</h4>
                            <p>Hip-hop, R&B, Rap</p>
                        </div>
                    </div>
                </div>

                {/* Fred Again's Album */}
                <div className="review-card">
                    <img
                        src={fredImage}
                        alt="Fred Again Album Cover"
                        className="review-image"
                    />
                    <div className="review-details">
                        <h3>Fred Again - Ten Days</h3>
                        <p>
                            Ten Days is a heartfelt electronic album by Fred Again, blending his unique production
                            style with personal, emotional themes that create an immersive and uplifting experience...
                        </p>
                        <div className="rating">
                            <span>Rating</span>
                            <div className="stars">★★★★★</div>
                            <p>From 6,876 Reviews</p>
                        </div>
                        <div className="genres">
                            <h4>Genres</h4>
                            <p>Electronic, Ambient</p>
                        </div>
                    </div>
                </div>
                {/* Sabrina Carpenter's Album */}
                <div className="review-card">
                    <img
                        src={sabrinaImage}
                        alt="Sabrina Carpenter Album Cover"
                        className="review-image"
                    />
                    <div className="review-details">
                        <h3>Sabrina Carpenter - Short N Sweet</h3>
                        <p>
                            Sabrina Carpenter charms listeners with Short N Sweet, a vibrant pop album that mixes catchy
                            melodies with heartfelt lyrics. It's a celebration of love, self-discovery, and joy...
                        </p>
                        <div className="rating">
                            <span>Rating</span>
                            <div className="stars">★★★★☆</div>
                            <p>From 7,643 Reviews</p>
                        </div>
                        <div className="genres">
                            <h4>Genres</h4>
                            <p>Pop, Electro Pop</p>
                        </div>
                    </div>
                </div>

                {/* Billie Eilish's Album */}
                <div className="review-card">
                    <img
                        src={billieImage}
                        alt="Billie Eilish Album Cover"
                        className="review-image"
                    />
                    <div className="review-details">
                        <h3>Billie Eilish -  Hit Me Hard and Soft</h3>
                        <p>
                            Billie Eilish delivers a haunting yet mesmerizing experience with Hit Me Hard and
                            Soft. The album blends minimalist production with deep emotional lyrics, showcasing her
                            signature style...
                        </p>
                        <div className="rating">
                            <span>Rating</span>
                            <div className="stars">★★★★★</div>
                            <p>From 11,240 Reviews</p>
                        </div>
                        <div className="genres">
                            <h4>Genres</h4>
                            <p>Alt Pop, Experimental</p>
                        </div>
                    </div>
                </div>

                {/* Tyler, the Creator's Album */}
                <div className="review-card">
                    <img
                        src={tylerImage}
                        alt="Tyler, the Creator Album Cover"
                        className="review-image"
                    />
                    <div className="review-details">
                        <h3>Tyler, the Creator - Chromakopia</h3>
                        <p>
                            Tyler, the Creator pushes boundaries once again with Chromakopia, an experimental album
                            filled with vivid storytelling, eclectic beats, and a bold exploration of identity and
                            art...
                        </p>
                        <div className="rating">
                            <span>Rating</span>
                            <div className="stars">★★★★★</div>
                            <p>From 9,752 Reviews</p>
                        </div>
                        <div className="genres">
                            <h4>Genres</h4>
                            <p>Experimental Hip-hop, Neo-Soul</p>
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
