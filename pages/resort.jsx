import Head from "next/head";
import React from "react";
import styles from "../styles/resort.module.css";
import { motion } from "framer-motion";
import { roomArr, cottageArr } from "../pages/api/dataResort";
import Image from "next/image";
import placeholder from "../public/placeholder.jpg";
import { AiOutlineSearch, AiFillStar, AiOutlineStar } from "react-icons/ai";

function resort() {
  const starRender = (num) => {
    if (num == 5) {
      return (
        <div className={styles.star_container}>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
      );
    } else if (num == 4) {
      return (
        <div className={styles.star_container}>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>
      );
    } else if (num == 3) {
      return (
        <div className={styles.star_container}>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      );
    } else if (num == 2) {
      return (
        <div className={styles.star_container}>
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      );
    } else if (num == 1) {
      return (
        <div className={styles.star_container}>
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      );
    }
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
      }}
      className={styles.resort_container}
    >
      <Head>
        <title>Resorts</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Resorts</h1>
      <div className={styles.inner_resort_container}>
        <div className={styles.left_inner}>
          <div className={styles.search_box}>
            <input type="text" name="" id="" />
            <button>
              <AiOutlineSearch />
            </button>
          </div>

          <h4>Type</h4>
          <div className={styles.label_div}>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Room</label>
          </div>
          <div className={styles.label_div}>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Cottage</label>
          </div>

          <h4>Facilities</h4>
          <div className={styles.label_div}>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Spa</label>
          </div>
          <div className={styles.label_div}>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Sauna</label>
          </div>
          <div className={styles.label_div}>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Fitness</label>
          </div>
          <div className={styles.label_div}>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Banquet</label>
          </div>

          <h4>Add Ons</h4>
          <div className={styles.label_div}>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Pillows</label>
          </div>
          <div className={styles.label_div}>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Blanket</label>
          </div>
          <div className={styles.label_div}>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Beds</label>
          </div>
          <div className={styles.label_div}>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Towel</label>
          </div>
          <div className={styles.label_div}>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Karaoke</label>
          </div>
        </div>
        <div className={styles.right_inner}>
          {roomArr.map((data, i) => {
            return (
              <div className={styles.content_item} key={i}>
                <Image src={placeholder} className={styles.img_resort} />
                <div className={styles.inner_item}>
                  {starRender(data.star)}
                  <p className={styles.location_name}>{data.name}</p>
                  <hr />
                  <p className={styles.price}>₱ {data.price}.00</p>
                </div>
              </div>
            );
          })}
          {cottageArr.map((data, i) => {
            return (
              <div className={styles.content_item} key={i}>
                <Image src={placeholder} className={styles.img_resort} />
                <div className={styles.inner_item}>
                  {starRender(data.star)}
                  <p className={styles.location_name}>{data.name}</p>
                  <hr />
                  <p className={styles.price}>₱ {data.price}.00</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default resort;