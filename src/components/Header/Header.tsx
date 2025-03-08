"use client";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  logoUrl: string;
  navLinks: string[];
  contactInfo: string;
}

const Header: React.FC<HeaderProps> = ({ logoUrl, navLinks, contactInfo }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.sticky : ""}`}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <nav>
          <a href="#women">WOMEN</a>
          <a href="#men">MEN</a>
          <a href="#kids">KIDS</a>
          <a href="#home">HOME</a>
          <a href="#stores">Stores</a>
          {/* <a href="#customer-care">Customer Care</a> */}
          <span className={styles.contact}>{contactInfo}</span>
          <span className={styles.customer}>Customer Care</span>
          <img className={styles.region} src="https://symbol.fashion/svg/4x3/other.svg" alt="region"></img>
        </nav>
      </div>

      {/* Main Navigation */}
      <div className={styles.navBar}>
        <img src={logoUrl} alt="logo" className={styles.logo} />
        <nav className={styles.navLinks}>
          {navLinks.map((link, index) => (
            <a key={index} href={`#${link.toLowerCase()}`}>
              {link}
            </a>
          ))}
        </nav>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search by products and brands" />
        </div>
        <div className={styles.icons}>
          <span className={styles.icon}>🔍</span>
          <span className={styles.icon}>❤️</span>
          <span className={styles.icon}>🛒</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
