import React, { useState } from "react";
import styles from "./ReservationPart2Item.module.css";
import { AiFillPlusCircle } from "react-icons/ai";

function ReservationPart2Item({ data }) {
  const [showAddOns, setShowAddOns] = useState(false);

  const [extraPillow, setExtraPillow] = useState(0);
  const [extraBed, setExtraBed] = useState(0);
  const [extraBlanket, setExtraBlanket] = useState(0);
  const [extraTowel, setExtraTowel] = useState(0);

  const [karaoke, setKaraoke] = useState(false);

  return (
    <div className={styles.transaction_item}>
      <div>
        <p className={styles.type_p}>{data.type || "Type"}</p>
        <p className={styles.location_p}>{data.locationName || "Location"}</p>
        <hr />
        <div className={styles.inner_item}>
          <div className={styles.inner_label}>
            <label htmlFor="">Check In</label>
            <p>{data.checkIn || "Date In"}</p>
          </div>
          <div className={styles.inner_label}>
            <label htmlFor="">Check Out</label>
            <p>{data.checkOut || "Date Out"}</p>
          </div>
        </div>
        <div className={styles.inner_item}>
          <div className={styles.inner_label}>
            <label htmlFor="">Adult</label>
            <p>{data.adult || "Adult Q"}</p>
          </div>
          <div className={styles.inner_label}>
            <label htmlFor="">Child</label>
            <p>{data.child || "Child Q"}</p>
          </div>
        </div>
        <div className={styles.inner_label}>
          <label htmlFor="">Time of Checking In</label>
          <p>{data.time || "Type"}</p>
        </div>
        <hr />
        <p className={styles.price_p}>₱ {data.price || "Price"}.00</p>
      </div>
      <button
        onClick={() => {
          if (showAddOns) {
            setShowAddOns(false);
          } else {
            setShowAddOns(true);
          }
        }}
      >
        Add Ons <AiFillPlusCircle />
      </button>

      {showAddOns && data.type == "Room" && (
        <div className={styles.add_ons_container}>
          <div className={styles.label_div}>
            <label htmlFor="">Extra Pillow</label>
            <input
              type="number"
              name=""
              id=""
              value={extraPillow}
              onChange={(e) => {
                setExtraPillow(e.target.value);
              }}
            />
          </div>
          <div className={styles.label_div}>
            <label htmlFor="">Extra Foam Bed</label>
            <input
              type="number"
              name=""
              id=""
              defaultValue={0}
              value={extraBed}
              onChange={(e) => {
                setExtraBed(e.target.value);
              }}
            />
          </div>
          <div className={styles.label_div}>
            <label htmlFor="">Extra Blanket</label>
            <input
              type="number"
              name=""
              id=""
              defaultValue={0}
              value={extraBlanket}
              onChange={(e) => {
                setExtraBlanket(e.target.value);
              }}
            />
          </div>
          <div className={styles.label_div}>
            <label htmlFor="">Extra Towel</label>
            <input
              type="number"
              name=""
              id=""
              defaultValue={0}
              value={extraTowel}
              onChange={(e) => {
                setExtraTowel(e.target.value);
              }}
            />
          </div>
        </div>
      )}

      {showAddOns && data.type == "Cottage" && (
        <div className={styles.add_ons_container}>
          <div className={styles.label_div}>
            <label htmlFor="">Karaoke</label>

            <input
              type="checkbox"
              name=""
              id=""
              value={karaoke}
              defaultChecked={karaoke}
              onClick={() => {
                if (karaoke) {
                  setKaraoke(false);
                } else {
                  setKaraoke(true);
                }
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ReservationPart2Item;
