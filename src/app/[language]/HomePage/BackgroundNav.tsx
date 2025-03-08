"use client";
import React, { useState } from "react";
import styles from "./BackgroundNav.module.css";
import Link from "next/link";
import { brands, additionalBrands, features, products, newInProducts, actualProducts, featuredProducts, recommendedProducts } from "./BackgroundData"; // Import data

interface BackgroundNavProps {
  images: string[];
}

const BackgroundNav: React.FC<BackgroundNavProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productIndex, setProductIndex] = useState(0); // State for product slider
  const [newInIndex, setNewInIndex] = useState(0);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [recommendedIndex, setRecommendedIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  //Product section
  const handleProductPrev = () => {
    setProductIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 4 : prevIndex - 4
    );
  };

  const handleProductNext = () => {
    setProductIndex((prevIndex) =>
      prevIndex >= products.length - 4 ? 0 : prevIndex + 4
    );
  };

  // New In section
  const handleNewInPrev = () => {
    setNewInIndex((prevIndex) =>
      prevIndex === 0 ? newInProducts.length - 3 : prevIndex - 3
    );
  };

  const handleNewInNext = () => {
    setNewInIndex((prevIndex) =>
      prevIndex >= newInProducts.length - 3 ? 0 : prevIndex + 3
    );
  };

  const handleFeaturedPrev = () => {
    setFeaturedIndex((prevIndex) => (prevIndex === 0 ? featuredProducts.length - 3 : prevIndex - 3));
  };

  const handleFeaturedNext = () => {
    setFeaturedIndex((prevIndex) => (prevIndex >= featuredProducts.length - 3 ? 0 : prevIndex + 3));
  };

  const handleRecommendedPrev = () => {
    setRecommendedIndex((prevIndex) => (prevIndex === 0 ? recommendedProducts.length - 3 : prevIndex - 3));
  };

  const handleRecommendedNext = () => {
    setRecommendedIndex((prevIndex) => (prevIndex >= recommendedProducts.length - 3 ? 0 : prevIndex + 3));
  };

  return (
    <>
      {/* Background Slider */}
      <div className={styles.container}>
        <div
          className={styles.background}
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        ></div>
        <button className={`${styles.navButton} ${styles.prevButton}`} onClick={handlePrev}>
          &lt;
        </button>
        <button className={`${styles.navButton} ${styles.nextButton}`} onClick={handleNext}>
          &gt;
        </button>
      </div>

      {/* Features Section */}
      <div className={styles.featuresContainer}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureItem}>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <div className={styles.featureImage}>
              <img src={feature.imageUrl} alt={feature.title} />
            </div>
          </div>
        ))}
      </div>

      {/* About Us Section */}
      <section className={styles.aboutUs}>
        <h2 className={styles.heading}>About us</h2>
        <div className={styles.brandContainer}>
          {brands.map((brand) => (
            <div key={brand.name} className={styles.brandItem}>
              <img src={brand.logo} alt={brand.name} className={styles.brandLogo} />
              {brand.description && <p className={styles.description}>{brand.description}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* All Brands Section */}
      <section className={styles.brandsSection}>
        <div className={styles.brandsGrid}>
          {additionalBrands.map((brand) => (
            <div key={brand.name} className={styles.brandCard}>
              <img src={brand.logo} alt={brand.name} className={styles.brandLogo} />
            </div>
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.allBrandsButton}>ALL BRANDS</button>
        </div>
      </section>
      {/* Product Section */}
      <section className={styles.productSection}>
      <Link href="/product-card">
        <button style={{ padding: "10px", fontSize: "16px" }}>Go to Product Card</button>
      </Link>
        <h2 className={styles.productHeading}>Popular Categories</h2>
        <div className={styles.productSlider}>
          <button className={styles.sliderButton} onClick={handleProductPrev}>
            &lt;
          </button>
          <div className={styles.productGrid}>
            {products.slice(productIndex, productIndex + 4).map((product) => (
              <div key={product.id} className={styles.productCard}>
                <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
                <p className={styles.productName}>{product.name}</p>
              </div>
            ))}
          </div>
          <button className={styles.sliderButton} onClick={handleProductNext}>
            &gt;
          </button>
        </div>
      </section>


      {/* New In Section */}
      <section className={styles.newInSection}>
        <h2 className={styles.newInHeading}>New In</h2>
        <div className={styles.newInSlider}>
          <button className={styles.sliderButton} onClick={handleNewInPrev}>
            &lt;
          </button>
          <div className={styles.newInGrid}>
            {newInProducts.slice(newInIndex, newInIndex + 3).map((product) => (
              <div key={product.id} className={styles.newInCard}>
                <img src={product.imageUrl} alt={product.name} className={styles.newInImage} />
              </div>
            ))}
          </div>
          <button className={styles.sliderButton} onClick={handleNewInNext}>
            &gt;
          </button>
        </div>
      </section>

      {/* Actual Section */}
      <section className={styles.actualSection}>
        <h2 className={styles.actualHeading}>Actual</h2>
        <div className={styles.actualGrid}>
          {actualProducts.slice(0, 3).map((product) => (
            <div key={product.id} className={styles.actualCard}>
              <img src={product.imageUrl} alt={product.name} className={styles.actualImage} />
              <p className={styles.actualName}>{product.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className={styles.featuredSection}>
        <h2 className={styles.featuredHeading}>Featured Products</h2>
        <div className={styles.featuredSlider}>
          <button className={styles.sliderButton} onClick={handleFeaturedPrev}>
            &lt;
          </button>
          <div className={styles.featuredGrid}>
            {featuredProducts.slice(featuredIndex, featuredIndex + 3).map((product) => (
              <div key={product.id} className={styles.featuredCard}>
                <img src={product.imageUrl} alt={product.name} className={styles.featuredImage} />
                {/* <p className={styles.featuredName}>{product.name}</p> */}
              </div>
            ))}
          </div>
          <button className={styles.sliderButton} onClick={handleFeaturedNext}>
            &gt;
          </button>
        </div>
      </section>

      {/* Recommended Section */}
      <section className={styles.recommendedSection}>
        <h2 className={styles.recommendedHeading}>Recommendations</h2>
        <div className={styles.recommendedSlider}>
          <button className={styles.sliderButton} onClick={handleRecommendedPrev}>
            &lt;
          </button>
          <div className={styles.recommendedGrid}>
            {recommendedProducts.slice(recommendedIndex, recommendedIndex + 3).map((product) => (
              <div key={product.id} className={styles.recommendedCard}>
                <img src={product.imageUrl} alt={product.name} className={styles.recommendedImage} />
                <p className={styles.recommendedName}>{product.name}</p>
                <p className={styles.recommendedPrice}>{product.price}</p> {/* Add price tag */}
              </div>
            ))}
          </div>
          <button className={styles.sliderButton} onClick={handleRecommendedNext}>
            &gt;
          </button>
        </div>
      </section>
    </>
  );
};

export default BackgroundNav;