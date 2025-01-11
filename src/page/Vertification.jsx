import React, { useEffect, useState } from "react";
import "../style/Verification.css";

const Vertification = ({ setCurrentPage }) => {
  const [endDate, setEndDate] = useState("");

  const onHanldeDate = (e) => {
    setEndDate(e.target.value);

    if (endDate === "2024-12-06") {
      setCurrentPage("first");
    }
    // console.log(endDate);
  };

  useEffect(() => {
    console.log(endDate);
  }, [endDate]);
  return (
    <form>
      <h1>너에게만 열리는 세상</h1>
      <>
        <h2>명저읽기 03분반 종강일은?</h2>
        <input
          type="date"
          value={endDate}
          onChange={onHanldeDate}
          style={{ position: "relative", zIndex: 2 }}
        />
      </>
    </form>
  );
};

export default Vertification;
