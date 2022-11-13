import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar_container}>
      <div className={styles.inner_navbar_container}>
        <div className={styles.left_navbar}>
          <Link href="/" className={styles.nav_links}>
            <h1>Resort Reservation System</h1>
          </Link>
        </div>
        <div className={styles.right_navbar}>
          <Link href="/" className={styles.nav_links}>
            <p>Home</p>
          </Link>
          <Link href="/resort" className={styles.nav_links}>
            <p>Resort</p>
          </Link>
          <Link href="/" className={styles.nav_links}>
            <p>About Us</p>
          </Link>
          <Link href="/" className={styles.nav_links}>
            <p>Contact Us</p>
          </Link>
          <Link href="/signin" className={styles.nav_links}>
            <p>Sign In</p>
          </Link>
          {/* <Link href="/sign" className={styles.nav_links}>
            <p>Sign Up</p>
          </Link> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
