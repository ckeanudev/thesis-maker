import React from "react";
import styles from "./ReservationItem.module.css";
import { BsTrashFill } from "react-icons/bs";

function ReservationItem({ data, i, addList, SetAddList }) {
  return (
    <div className={styles.reserve_list_item}>
      <div className={styles.top_item}>
        <p>Form {i + 1}</p>

        <button onClick={() => {}}>
          <BsTrashFill />
        </button>
      </div>

      <div className={styles.middle_item}>
        <p className={styles.type_p}>{data.type}</p>
        <p className={styles.location_p}>{data.locationName}</p>
        <hr />
        <div className={styles.inner_middle_item}>
          <div className={styles.label_item}>
            <label htmlFor="">Check In</label>
            <p>{data.checkIn}</p>
          </div>
          <div className={styles.label_item}>
            <label htmlFor="">Check Out</label>
            <p>{data.checkOut}</p>
          </div>
        </div>
        <div className={styles.inner_middle_item}>
          <div className={styles.label_item}>
            <label htmlFor="">Adult</label>
            <p>{data.adult}</p>
          </div>
          <div className={styles.label_item}>
            <label htmlFor="">Child</label>
            <p>{data.child}</p>
          </div>
        </div>
        <div className={styles.label_item}>
          <label htmlFor="">Time of Checking In</label>
          <p>{data.time}</p>
        </div>
        <hr />
        <p className={styles.price_p}>Price: ₱ {data.price}.00</p>
      </div>
    </div>
  );
}

export default ReservationItem;
