import React, { useEffect, useState } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from an API or static source
        const fetchProducts = async () => {
            const response = await fetch('/api/products'); // Replace with your API endpoint
            const data = await response.json();
            setProducts(data);
        };

        fetchProducts();
    }, []);

    return (
        <div className="product-list">
            <h2>Available Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;