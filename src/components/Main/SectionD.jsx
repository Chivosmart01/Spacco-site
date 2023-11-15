import React from "react";
import styles from "./SectionD.module.css";

const datas = [
  {
    key:1,
    title: ` What We're About `,
    p: ` 
        "Our benefits reward you for good behavior instead of trapping you in an endless spiral of interest & penalties."
        "We believe we can change the world by helping people with less than great credit get back on track."
        "Our mission is to build the fastest & easiest way to get a benefits."  `,
  },

  {
    key:2,
    title: ` Grow Your Score `,
    p: ` Our personal benefits reward you for good behavior instead of trapping you in an endless spiral of interest & penalties. Together, we grow your benefits score to unlock better rates.    `,
  },
];

const SectionD = () => {
  return (
    <section className={styles.wrapper}>
      <ul className={styles.lists}>
        {datas.map((data) => (
          <li key={data.key} className={styles.list}>
            <h1>{data.title}</h1>
            <p>{data.p}</p>
          </li>
        ))}
      </ul>
      <article className={styles.article}>
        <p>
          * Funds will be distributed via ACH. Most banks will post the funds to
          your account by the next business day. Subject to underwriting
          approval.
        </p>
        <p>
          ** Subject to online availability and underwriting may request
          additional items prior to final approval.
        </p>
        <p>
          † Benefits approvals are subject to underwriting criteria and the
          approval process may take longer if required items are not able to be
          verified online or additional items are requested.
        </p>
        <p>
          ‡ Funds will be distributed via ACH. Most banks will post the funds to
          your account by the next business day. One’s bank will determine when
          funds are actually available.
        </p>
        <p className={styles.footer}>
          © Copyright - Benefits will only be available to residents in
          those states where permitted by law and based on applicant’s
          creditworthiness. benefits approvals are subject to underwriting
          criteria, which may vary from state to state. benefits is not a credit
          repair service and obtaining a benefits with benefits does not guarantee
          that your credit score will improve.
        </p>
      </article>
    </section>
  );
};

export default SectionD;
