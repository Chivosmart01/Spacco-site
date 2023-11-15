import React from "react";
import grant from "../../assets/GRANTS 2.png"
import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles["img-div"]}>
      {/* <img src={grant} /> */}
      {/* <img src={} alt="" /> */}
      </div>
      <h4>FIND. APPLY. SUCCEED</h4>
    </header>
  );
};

export default Header;
