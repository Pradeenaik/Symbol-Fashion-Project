'use client';

import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import styles from './ProductList.module.css';

interface Product {
  id: number;
  title: string;
  description: string;
  images: string[];
  price: number;
  discountPercentage?: number;
  stock: number;
  brand: string;
  category: string;
  rating: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 20;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=100'); // Fetching 100 products
        const data = await response.json();

        // Ensure 'images' is always an array
        const formattedProducts = data.products.map((product: any) => ({
          ...product,
          images: Array.isArray(product.images) && product.images.length > 0 
            ? product.images 
            : [product.thumbnail], // Use thumbnail if images are missing
        }));

        setProducts(formattedProducts);
      } catch (error) {
        setError('Failed to fetch products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className={styles.productContainer}>
      {loading && <div className={styles.loading}>Loading...</div>}
      {error && <div className={styles.error}>{error}</div>}
      {!loading && !error && (
        <>
          <div className={styles.productGrid}>
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {/* Pagination Controls */}
          <div className={styles.pagination}>
            <button 
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              &lt;
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button 
                key={index + 1} 
                className={currentPage === index + 1 ? styles.activePage : ''}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            <button 
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductList;
