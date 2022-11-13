import Link from "next/link";
import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner_footer}>
        <div className={styles.first_div}>
          <h2>Quick links</h2>

          <Link href="/" className={styles.link_links}>
            Home
          </Link>
          <Link href="/" className={styles.link_links}>
            Resort
          </Link>
          <Link href="/" className={styles.link_links}>
            About Us
          </Link>
        </div>
        <div className={styles.first_div}>
          <h2>Contact</h2>

          <Link href="/" className={styles.link_links}>
            Contact Us
          </Link>
          <Link href="/" className={styles.link_links}>
            resort@gmail.com
          </Link>
          <Link href="/" className={styles.link_links}>
            0999-999-999
          </Link>
        </div>
        <div className={styles.first_div}>
          <h2>Social Media</h2>

          <Link href="/" className={styles.link_links}>
            Facebook
          </Link>
          <Link href="/" className={styles.link_links}>
            Twitter
          </Link>
        </div>
        <div className={styles.first_div}>
          <h2>Join our newsletter</h2>
          <div className={styles.inner_fourth}>
            <input
              type="email"
              name=""
              id=""
              placeholder="Your email address"
            />
            <button>Sign In</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
