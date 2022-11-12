import React, { useState, useEffect } from "react";
import styles from "./ReservationPart1.module.css";
import { motion } from "framer-motion";
import ReservationItem from "./components/ReservationItem";
import { BsPlusCircleFill } from "react-icons/bs";
import ShowType from "./components/ShowType";
import ShowMainForm from "./components/ShowMainForm";
import ShowLocation from "./components/ShowLocation";

function ReservationPart1({
  setShowPart1,
  setShowPart2,
  addList,
  SetAddList,
  typeForm,
  setTypeForm,
  typeFormLocation,
  setTypeFormLocation,
  checkIn,
  setCheckIn,
  checkOut,
  setCheckOut,
  adult,
  setAdult,
  child,
  setChild,
  price,
  setPrice,
  time,
  setTime,
}) {
  const [showType, setShowType] = useState(false);
  const [showMainForm, setShowMainForm] = useState(false);
  const [showLocation, setShowLocation] = useState(false);

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
      className={styles.reservation_part1_container}
    >
      {showType && (
        <ShowType
          setShowType={setShowType}
          setTypeForm={setTypeForm}
          setShowMainForm={setShowMainForm}
        />
      )}

      {showMainForm && (
        <ShowMainForm
          setShowType={setShowType}
          setShowMainForm={setShowMainForm}
          setShowLocation={setShowLocation}
          setCheckIn={setCheckIn}
          checkIn={checkIn}
          setCheckOut={setCheckOut}
          checkOut={checkOut}
          setAdult={setAdult}
          adult={adult}
          setChild={setChild}
          child={child}
          setTime={setTime}
          time={time}
        />
      )}

      {showLocation && (
        <ShowLocation
          setShowMainForm={setShowMainForm}
          setShowLocation={setShowLocation}
          setTypeFormLocation={setTypeFormLocation}
          typeFormLocation={typeFormLocation}
          typeForm={typeForm}
          checkIn={checkIn}
          checkOut={checkOut}
          adult={adult}
          child={child}
          price={price}
          setPrice={setPrice}
          SetAddList={SetAddList}
          addList={addList}
          setTime={setTime}
          time={time}
        />
      )}

      {addList.map((data, i) => {
        return (
          <ReservationItem
            key={i}
            data={data}
            i={i}
            SetAddList={SetAddList}
            addList={addList}
          />
        );
      })}

      <div
        className={styles.add_button}
        onClick={() => {
          setShowType(true);
        }}
      >
        <p>Click to Add</p>
        <BsPlusCircleFill />
      </div>

      <div className={styles.bottom_summary_content}>
        <h2>Total Amount: ₱ {sumAllPrice()}.00</h2>
        <button
          onClick={() => {
            if (addList.length > 0) {
              setShowPart1(false);
              setShowPart2(true);
            } else {
              alert("Oops! you need to choose a Room/Cottage.");
            }
          }}
        >
          Proceed
        </button>{" "}
      </div>
    </motion.div>
  );
}

export default ReservationPart1;
