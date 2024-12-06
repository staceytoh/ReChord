import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/homepage';
import NewsPage from './pages/news'; 
import ReviewsPage from './pages/reviews'; 
import SocialPage from './pages/social'; 

const App = () => {
    return (
        <Router>
            <Navbar />
            <div className="container mx-auto p-4">
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/news" element={<NewsPage />} />
                    <Route path="/reviews" element={<ReviewsPage />} />
                    <Route path="/social" element={<SocialPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
