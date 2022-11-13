import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./ReservationPart3.module.css";
import { ImSpinner8 } from "react-icons/im";
import Link from "next/link";

function ReservationPart3() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

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
      className={styles.outer_reservation_part3_container}
    >
      {loading ? (
        <div className={styles.loading_container}>
          <p className={styles.please_wait}>Please Wait</p>
          <p className={styles.loading_spin}>
            <ImSpinner8 />
          </p>
        </div>
      ) : (
        <div className={styles.succeed_container}>
          <h1>Thank you for booking</h1>
          <Link href="/">
            <button>Go to Home</button>
          </Link>
        </div>
      )}
    </motion.div>
  );
}

export default ReservationPart3;
