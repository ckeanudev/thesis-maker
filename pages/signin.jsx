import Head from "next/head";
import React, { useState } from "react";
import styles from "../styles/signin.module.css";
import { AiOutlineGoogle } from "react-icons/ai";
import { motion } from "framer-motion";
import Link from "next/link";

function Signin() {
  const [showSignIn, setShowSignIn] = useState(true);

  return (
    <div className={styles.signin_container}>
      <Head>
        <title>Sign In/Up</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      {showSignIn && (
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.signin_content}
        >
          <h1>Sign In</h1>
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <button className={styles.signin_btn}>
            <Link href="/profile" className={styles.signin_btn_link}>
              Sign In
            </Link>
          </button>

          <button className={styles.signin_google}>
            Sign In with Google <AiOutlineGoogle />
          </button>
          <p
            onClick={() => {
              setShowSignIn(false);
            }}
          >
            Sign Up
          </p>
        </motion.div>
      )}

      {!showSignIn && (
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.signup_content}
        >
          <h1>Sign In</h1>
          <input type="text" placeholder="Full Name" />
          <input type="email" name="" id="" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <input type="number" name="" id="" placeholder="Phone Number" />
          <input type="text" name="" id="" placeholder="Home Address" />
          <button>Create Account</button>
          <p
            onClick={() => {
              setShowSignIn(true);
            }}
          >
            Sign In
          </p>
        </motion.div>
      )}
    </div>
  );
}

export default Signin;
