import React from "react";
import style from "./feedback.module.css";
export default function Feedback({ totalFeedback, updateFeedback }) {
  return (
    <div className={style.block}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && (
        <button onClick={() => updateFeedback("reset")}>Reset</button>
      )}
    </div>
  );
}
