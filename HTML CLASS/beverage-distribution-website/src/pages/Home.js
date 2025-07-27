import React from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
    return (
        <div>
            <h1>Welcome to Our Beverage Distribution Company</h1>
            <p>Your one-stop solution for all beverage needs.</p>
            <h2>Featured Products</h2>
            <ProductList />
        </div>
    );
};

export default Home;