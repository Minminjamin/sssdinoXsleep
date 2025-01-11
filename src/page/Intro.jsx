import React, { useEffect } from "react";
import "../style/Intro.css";

const Intro = ({ onComplete }) => {
  const startDay = new Date("2024-12-07");
  const today = new Date();
  const dDay = Math.ceil((today - startDay) / (1000 * 60 * 60 * 24));

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <article>
      <h1>sssdino X sleep</h1>

      <h2>우리가 함께해 온 {dDay + 1}일의 시간</h2>
      <span>Make Full-Stack Engineer 손자민. 계절학기 시험기간</span>
    </article>
  );
};

export default Intro;
