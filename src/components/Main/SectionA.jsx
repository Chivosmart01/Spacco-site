import React from "react";
import cashBag from "../../assets/Grant3.webp";
import styles from "./SectionA.module.css";
import { Link } from "react-router-dom";

const SectionA = () => {
  return (
    <section className={styles.wrapper}>
      <article className={styles.article}>
        <h1 className={styles.title}>
          Benefits From Us Easier, Faster and Better
        </h1>
        <p>We're helping good people get better grants</p>
        <h3 className={styles.title}>Quick Benefits Funding</h3>
        <p>Cash in your bank account right away *</p>
        <h3 className={styles.title}>Verify Income Instantly</h3>
        <p>Connect your bank for quick verification**</p>
      </article>
      <div className={styles["img-btn-div"]}>
        <div className={styles["img-div"]}>
          <img src={cashBag} alt="" />
        </div>
        <Link to="/grantForm" className={styles.btn}>
          <button className={styles.btn}>Apply Now</button>
        </Link>
      </div>
    </section>
  );
};

export default SectionA;
