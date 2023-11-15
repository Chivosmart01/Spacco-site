import React from "react";
import styles from "./SectionC.module.css";
import img1 from "../../assets/grant10.webp";
import img2 from "../../assets/grant6.webp";
import img3 from "../../assets/grant11.webp";
import vid from "../../assets/grant9.jpg";

const datas = [
  {
    img: img1,
    key:1,
    h5: `5-Minute Application`,
    p: `  All it takes is a few minutes. We’re fast, easy and headache-free.`,
  },
  {
    img: img2,
    key:2,
    h5: ` Fast & Easy Approval`,
    p: `Get your quick benefit approval online. Money in minutes.`,
  },
  {
    img: img3,
    key:3,
    h5: ` Deposit to Your Account`,
    p: ` Funds are deposited fast into your bank account! ‡`,
  },
];

const SectionC = () => {
  return (
    <section className={styles.wrapper}>
      <h1>Why Benefits</h1>
      <ul className={styles.lists}>
        {datas.map((data) => (
          <li key={data.key} className={styles.list}>
            <div>
              <img src={data.img} alt="" />
            </div>
            <h5> {data.h5}</h5>
            <p>{data.p}</p>
          </li>
        ))}
      </ul>
      <div className={styles["article-div"]}>
        <article className={styles.article}>
          <h3>Apply Now</h3>
          <p>Complete our easy Application</p>
          <h3>Get Approved ​</h3>
          <p>
            You will get a quick benefits approval decision. We are a direct
            benefits so there is no long wait for an answer
          </p>
          <h3>Get Your Money ​</h3>
          <p>We deposit your money right into your bank account, no hassles.</p>
        </article>
        <div className={styles["img-div"]}>
          <img src={vid} alt="" />
        </div>
      </div>
    </section>
  );
};

export default SectionC;
