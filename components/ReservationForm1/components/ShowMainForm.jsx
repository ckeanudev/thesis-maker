import React from "react";
import styles from "./ShowMainForm.module.css";

function ShowMainForm({
  setShowType,
  setShowMainForm,
  setShowLocation,
  setCheckIn,
  checkIn,
  setCheckOut,
  checkOut,
  setAdult,
  adult,
  setChild,
  child,
  time,
  setTime,
}) {
  return (
    <div className={styles.mainform_container}>
      <div className={styles.inner_mainform_container}>
        <div className={styles.content_form}>
          <div className={styles.inner_form}>
            <label htmlFor="">Check In</label>
            <input
              type="date"
              name=""
              id=""
              value={checkIn}
              onChange={(e) => {
                setCheckIn(e.target.value);
              }}
            />
          </div>
          <div className={styles.inner_form}>
            <label htmlFor="">Check Out</label>
            <input
              type="date"
              name=""
              id=""
              value={checkOut}
              onChange={(e) => {
                setCheckOut(e.target.value);
              }}
            />
          </div>
        </div>

        <div className={styles.content_form}>
          <div className={styles.inner_form}>
            <label htmlFor="">Adult</label>
            <input
              type="number"
              name=""
              id=""
              value={adult}
              onChange={(e) => {
                setAdult(e.target.value);
              }}
            />
          </div>
          <div className={styles.inner_form}>
            <label htmlFor="">Child</label>
            <input
              type="number"
              name=""
              id=""
              value={child}
              onChange={(e) => {
                setChild(e.target.value);
              }}
            />
          </div>
        </div>

        <label className={styles.label_time} htmlFor="">
          Time of check in
        </label>
        <input
          className={styles.time_input}
          type="time"
          name=""
          id=""
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
          }}
        />

        <button
          className={styles.next_btn}
          onClick={() => {
            if (adult > 0) {
              setShowMainForm(false);
              setShowLocation(true);
              setShowType(false);
            } else {
              alert("Oops! 1 adult is needed.");
            }
          }}
        >
          Next
        </button>
        <button
          className={styles.back_btn}
          onClick={() => {
            setShowMainForm(false);
            setShowType(true);
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default ShowMainForm;
