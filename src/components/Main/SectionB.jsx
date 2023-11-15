import React from "react";
import styles from "./SectionB.module.css";
import person from "../../assets/grant5.jpeg";

const datas = [
  {
    key:1 ,
    title: `Benefits: Social Security Disability Payments`,
    p: ` There are two types of disability payments issued by the Social Security Administration: Supplemental Security Income (SSI) and Social Security Disability Insurance (SSDI).  SSI is designed for disabled individuals with limited income and assets, while SSDI provides income to individuals who have worked in the past but are no longer able to work.  People receiving SSI and SSDI payments can receive benefits for the same reason veterans receiving VA disability payments are accepted: government checks are virtually guaranteed to arrive like clockwork. `,
  },
  {
    key:2 ,
    title: `Benefits: benefits for Training and Instruction for Disabled Individuals   `,
    p: ` There are two types of disability payments issued by the Social Security Administration: Supplemental Security Income (SSI) and Social Security Disability Insurance (SSDI).  SSI is designed for disabled individuals with limited income and assets, while SSDI provides income to individuals who have worked in the past but are no longer able to work.  People receiving SSI and SSDI payments are eligible for benefits for the same reason veterans receiving VA disability payments are accepted: government checks are virtually guaranteed to arrive like clockwork. `,
  },
  {
    key:3,
    title: `Benefits: benefits for Support and Care taking Services  `,
    p: `  Sometimes all that is needed to maintain independence is a moderate amount of support.  benefits for disabled individuals can finance services such as cleaning, meal preparation and minor repairs around the house.  Also, funds can also be used to pay for the services of personal assistants for disabled individuals. `,
  },
  {
    key:4,
    title: `Benefits: benefits for Specialized Equipment and Household Modifications  `,
    p: ` Modifications and specialized equipment can make it easier for disabled individuals to function independently at work and at home. benefits for disabled individuals can finance changes such as ramps for porches, handrails on bathtubs and toilets, Braille plates on appliances like washers and dryers and hand controls for cars. `,
  },
  {
    key:5 ,
    title: ` Getting a benefits for Disability Do Not Always get Approved `,
    p: `In many instances, It is understandable: benefits carry the lowest interest rates.  Also, many people borrow from their local banks, where they know the lending officer and are familiar with bank policies.  But banks may be reluctant to approve benefits for people on disability payments because those payments are often modest and must stretch to cover expenses that people without disabilities don not have to address.  `,
  },
  {
    key:6,
    title: ` Nonbank and benefits can Demand Higher Interest Rates `,
    p: ` Nonbank benefits for people on disability payments can come from sources ranging from nonbank benefits brokers and peer-to-peer benefits to less desirable sources such as pawn shops, and stores.  While some nonbank maintain brick-and-mortar establishments, many operate strictly online.  By doing so, they lower their overhead costs, while allowing benefits to enjoy the convenience of submitting applications from their own homes, on their own time.  But nonbank benefits often operate as intermediaries rather than benefits, sharing a form with third parties or requiring borrowers to share information on a public website, with potential exposure to scammers and identity thieves. benefits and pawn shops are especially undesirable sources of benefits for people on disability payments, due to their high-interest rates and demands for lump-sum payments combined with brief repayment periods.  `,
  },
  {
    key:7,
    title: `The LoanNow Alternative, the Right Choice for Your Disability Loan! `,
    p: ` Benefits have the same detracting features as all other benefits: high-interest rates required payment in full. These three factors combine to make it nearly possible to get their benefits in full. The benefits trap is just as real with payday disability benefits too. However, because disabled benefits are unable to work, options such as getting a second job to attempt benefits off aren’t viable.
    benefits allows to obtain the funds they need while avoiding the payday trap.  That is because benefits .  And benefits says NO to rollovers.  Whether you are working or disabled, discover for yourself why savvy benefits make their go-to source for personal benefits! `,
  },
];

const SectionB = () => {
  return (
    <section className={styles.wrapper}>
      <article className={styles.article}>
        <h1>Benefits from Benefit-GovEasier, Faster, and Better</h1>
        <p>
          Benefits from benefits-Gov Easier, Faster, and Better You may be familiar
          with the phrase “your paycheck is your credit.” However, working
          people are not the only ones getting payday benefits. Although payday
          benefits get their nickname from the wages and salaries, many payday
          loan borrowers earn. But individuals receiving government payments are
          also desirable to many payday lenders because of the reliability of
          their monthly checks. . benefits provides the money people receiving
          government checks need.
        </p>
      </article>
      <article className={styles["img-p-div"]}>
        <div className={styles["img-div"]}>
          <img src={person} alt="" />
        </div>
        <div>
          <h2>Benefits: Veterans Administration Disability Payments</h2>
          <p>
            The 2007 Military Authorization Act effectively banned benefits that
            were previously available for men and women on active military duty.
            The Act capped interest charged on loans to active duty personnel to
            36 percent far lower than the 300-plus percent interest rates
            charged by many. However, the Act does not cover veterans. benefits
            are often very eager to provide benefits to veterans receiving VA
            disability benefits because checks are virtually guaranteed.
          </p>
        </div>
      </article>
      {datas.map((data) => (
        <article key={data.key} className={styles.article}>
          <h2>{data.title}</h2>
          <p>{data.p}</p>
        </article>
      ))}
    </section>
  );
};

export default SectionB;
