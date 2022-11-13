import React, { useState, useEffect } from "react";
import styles from "./ReservationPart2.module.css";
import { motion } from "framer-motion";
import ReservationPart2Item from "./components/ReservationPart2Item";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

function ReservationPart2({
  setShowPart1,
  setShowPart2,
  setShowPart3,
  addList,
}) {
  const [focusPayment, setFocusPayment] = useState("none");

  const sumAllPrice = () => {
    let sumPrice = 0;

    addList.map((data, i) => {
      return (sumPrice += data.price);
    });

    return sumPrice;
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
        duration: 0.6,
      }}
      className={styles.outer_reservation_part2_container}
    >
      <div className={styles.left_part2}>
        {addList.map((data, i) => {
          return <ReservationPart2Item data={data} key={i} />;
        })}
      </div>

      {/* <ReservationPart2Item /> */}
      <div className={styles.right_part2}>
        <h3>Transaction</h3>

        <div className={styles.total_price}>
          <label htmlFor="">Total Amount: </label>
          <p>₱ {sumAllPrice()}.00</p>
        </div>
        <div className={styles.top_trans}>
          <p>Pay with</p>

          <button
            className={styles.paypal_btn}
            onClick={() => {
              setFocusPayment("paypal");
            }}
            style={
              focusPayment == "paypal" ? { backgroundColor: "#D90429" } : {}
            }
          >
            <GoArrowRight
              style={
                focusPayment == "paypal"
                  ? { display: "block" }
                  : { display: "none" }
              }
            />
            Paypal
            <GoArrowLeft
              style={
                focusPayment == "paypal"
                  ? { display: "block" }
                  : { display: "none" }
              }
            />
          </button>
          <button
            className={styles.cash_btn}
            onClick={() => {
              setFocusPayment("cash");
            }}
            style={focusPayment == "cash" ? { backgroundColor: "#D90429" } : {}}
          >
            <GoArrowRight
              style={
                focusPayment == "cash"
                  ? { display: "block" }
                  : { display: "none" }
              }
            />
            Cash
            <GoArrowLeft
              style={
                focusPayment == "cash"
                  ? { display: "block" }
                  : { display: "none" }
              }
            />
          </button>
        </div>
        <div className={styles.middle_trans}>
          <button
            onClick={() => {
              if (focusPayment == "none") {
                alert("Oops, select what to pay with.");
              } else {
                setShowPart2(false);
                setShowPart3(true);
              }
            }}
          >
            Payout Now!
          </button>
        </div>
        <div className={styles.bottom_trans}></div>
      </div>
    </motion.div>
  );
}

export default ReservationPart2;
