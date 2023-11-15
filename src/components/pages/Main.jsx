import React from "react";
import SectionA from "../Main/SectionA";
// import SectionA from "../";
import "./Main.css";
import SectionB from "../Main/SectionB";
import SectionC from "../Main/SectionC";
import SectionD from "../Main/SectionD";
import Header from "../header/Header";

const Main = () => {
  return (
    <>
    <Header />
    <main>
      <SectionA />
      <SectionB />
      <SectionC />
      <SectionD />
    </main>
    </>
  );
};

export default Main;
