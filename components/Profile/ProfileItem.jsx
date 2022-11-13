import React from "react";
import styles from "./ProfileItem.module.css";

function ProfileItem({ data }) {
  return (
    <div className={styles.transaction_item}>
      <p
        className={styles.status_book}
        style={
          data.status == 1
            ? { backgroundColor: "green" }
            : data.status == 2
            ? { backgroundColor: "#fca311" }
            : data.status == 3
            ? { backgroundColor: "red" }
            : {}
        }
      >
        {data.status == 1
          ? "Completed"
          : data.status == 2
          ? "Ongoing"
          : data.status == 3
          ? "Canceled"
          : "None"}
      </p>
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
  );
}

export default ProfileItem;
