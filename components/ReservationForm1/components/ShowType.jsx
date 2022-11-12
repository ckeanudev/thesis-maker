import React from "react";
import styles from "./ShowType.module.css";

function ShowType({ setShowType, setTypeForm, setShowMainForm }) {
  return (
    <div className={styles.showtype_container}>
      <div className={styles.inner_showtype}>
        <h4>What do you want to reserve?</h4>

        <button
          className={styles.room_btn}
          onClick={() => {
            setTypeForm("Room");
            setShowMainForm(true);
          }}
        >
          Room
        </button>
        <button
          className={styles.cottage_btn}
          onClick={() => {
            setTypeForm("Cottage");
            setShowMainForm(true);
          }}
        >
          Cottage
        </button>

        <p
          onClick={() => {
            setShowType(false);
          }}
        >
          Close
        </p>
      </div>
    </div>
  );
}

export default ShowType;
