import React, { useState } from "react";
import Image from "next/image";
import styles from "./ShowLocation.module.css";
import { roomArr, cottageArr } from "../../../pages/api/dataResort";
import placeholder from "../../../public/placeholder.jpg";

function ShowLocation({
  setShowMainForm,
  setShowLocation,
  setTypeFormLocation,
  typeFormLocation,
  typeForm,
  checkIn,
  checkOut,
  adult,
  child,
  price,
  setPrice,
  SetAddList,
  addList,
  setTime,
  time,
}) {
  const [focusItem, setFocusItem] = useState(0);

  return (
    <div className={styles.choose_location_container}>
      <div className={styles.inner_choose_location_container}>
        <h2>Choose your {typeForm == "" ? "NONE" : typeForm}</h2>

        {/* <div className={styles.content_scroll}></div> */}
        <div className={styles.content_location}>
          {typeForm == "Room"
            ? roomArr.map((data, i) => {
                return (
                  <div
                    className={styles.content_item}
                    key={i}
                    style={
                      focusItem == i + 1 ? { border: "3px solid #00b4d8" } : {}
                    }
                    onClick={() => {
                      setFocusItem(i + 1);
                      setPrice(data.price);
                      setTypeFormLocation(data.name);
                    }}
                  >
                    <Image src={placeholder} className={styles.item_img} />
                    <div className={styles.inner_item}>
                      <p className={styles.location_name}>{data.name}</p>
                      <hr />
                      <p className={styles.price}>₱ {data.price}.00</p>
                    </div>
                  </div>
                );
              })
            : typeForm == "Cottage"
            ? cottageArr.map((data, i) => {
                return (
                  <div
                    className={styles.content_item}
                    key={i}
                    style={
                      focusItem == i + 1 ? { border: "3px solid #00b4d8" } : {}
                    }
                    onClick={() => {
                      setFocusItem(i + 1);
                      setPrice(data.price);
                      setTypeFormLocation(data.name);
                    }}
                  >
                    <Image src={placeholder} className={styles.item_img} />
                    <div className={styles.inner_item}>
                      <p className={styles.location_name}>{data.name}</p>
                      <hr />
                      <p className={styles.price}>₱ {data.price}.00</p>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>

        <div className={styles.bottom_content}>
          <button
            className={styles.back_btn}
            onClick={() => {
              setShowMainForm(true);
              setShowLocation(false);
            }}
          >
            Back
          </button>
          <button
            className={styles.next_btn}
            onClick={() => {
              setShowLocation(false);
              SetAddList([
                ...addList,
                {
                  type: typeForm,
                  checkIn: checkIn,
                  checkOut: checkOut,
                  adult: adult,
                  child: child,
                  locationName: typeFormLocation,
                  price: price,
                  time: time,
                },
              ]);
            }}
          >
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowLocation;
