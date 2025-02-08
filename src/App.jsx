import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import ProductDetail from './ProductDetail';
import "./style.css";

const App = () => {
    return (
        <Router>
            <header className='header'>
                    <Link to="/" className='logo'>
                        Planti           
                    </Link>
                <nav className='nav'>
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link> 
                    <Link to="/cart">Cart</Link>
                    <Link to="/login">Login</Link>
                </nav>
            </header>

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products/:name" element={<ProductDetail />} /> 
                </Routes>
            </main>

            <footer className='footer'>
                <p>&copy; 2024 E-Commerce. All rights reserved.</p>
                <div className='social-media'>
                    <a href='#'>Facebook</a>
                    <a href='#' className='mid'>Twitter</a>
                    <a href='#'>Instagram</a>
                </div> 
            </footer>
        </Router>
    );
};

export default App;