import React from "react";
import styles from "../styles/profile.module.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Link from "next/link";
import ProfileItem from "../components/Profile/ProfileItem";
import { profileHistory } from "../pages/api/dataResort";
import Head from "next/head";

function profile() {
  return (
    <div className={styles.profile_container}>
      <Head>
        <title>Profile Site</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
        <div className={styles.inner_nav}>
          <Link href="/" className={styles.link_link}>
            <p className={styles.back_btn}>
              <BsFillArrowLeftCircleFill />
            </p>
          </Link>

          <Link href="signin" className={styles.link_link}>
            <p className={styles.signout_btn}>Sign Out</p>
          </Link>
        </div>
      </nav>

      <div className={styles.top_profile_content}>
        <h1>User Fullname </h1>

        <div className={styles.user_description}>
          <div className={styles.user_label}>
            <label htmlFor="">Email Address</label>
            <p>google@gmail.com</p>
          </div>
          <div className={styles.user_label}>
            <label htmlFor="">Contact Number</label>
            <p>09234567898</p>
          </div>
          <div className={styles.user_label}>
            <label htmlFor="">Home Address</label>
            <p>Zamboanga City, Philippines</p>
          </div>
        </div>
      </div>

      <div className={styles.middle_profile_content}>
        {profileHistory.map((data, i) => {
          return <ProfileItem key={i} data={data} />;
        })}
      </div>
    </div>
  );
}

export default profile;