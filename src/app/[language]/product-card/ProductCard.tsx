import React from "react";
import styles from "./ProductCard.module.css";

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

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const imageUrl = product.images?.length > 0 ? product.images[0] : "/default-image.png";
  const discountedPrice = product.discountPercentage
    ? (product.price * (1 - product.discountPercentage / 100)).toFixed(2)
    : product.price.toFixed(2);

  return (
    <div className={styles.productCard}>
      <img src={imageUrl} alt={product.title} className={styles.productImage} />
      <div className={styles.productDetails}>
        <h3 className={styles.productTitle}>{product.title}</h3>
        <p className={styles.productBrand}>{product.brand}</p>
        <p className={styles.productPrice}>
          <span className={product.discountPercentage ? styles.oldPrice : ""}>€{product.price.toFixed(2)}</span>
          {product.discountPercentage && (
            <>
              {" "}
              <span className={styles.discountedPrice}>€{discountedPrice}</span>
              <span className={styles.discountBadge}>-{product.discountPercentage}%</span>
            </>
          )}
        </p>
        <p className={styles.productStock}>{product.stock > 0 ? "In Stock" : "Out of Stock"}</p>
      </div>
    </div>
  );
};

export default ProductCard;
