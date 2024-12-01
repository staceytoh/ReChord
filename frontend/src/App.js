import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
import ReviewsPage from './pages/ReviewsPage';
import SocialPage from './pages/SocialPage';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/news" element={<NewsPage />} />
                <Route path="/reviews" element={<ReviewsPage />} />
                <Route path="/social" element={<SocialPage />} />
            </Routes>
        </Router>
    );
};

export default App;
