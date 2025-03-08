import React from "react";
import ProductList from "./ProductList";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.pageContainer}>
      <h1>Featured Products</h1>
      <ProductList/>
    </div>
  );
};

export default HomePage;
