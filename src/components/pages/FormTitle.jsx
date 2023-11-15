import React from "react";
import Form from "../form/Form";
import Header from "../header/Header";
import styles from "./FormTitle.module.css";

const FormTitle = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <article className={styles.article}>
        <h3>Welcome! Let's check your personalized rates.</h3>
        <p>
          Your application has been pre-filled for your convenience. Fill in any
          missing information below. Checking rates does not affect your credit
          score. Please make sure your information is accurate, as it'll
          significantly affect the offers you will receive.
        </p>
      </article>
      <Form />
    </div>
  );
};

export default FormTitle;
