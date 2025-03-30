import React from "react";
import style from "./options.module.css";
export default function Options({ totalFeedback, feedback }) {
  if (totalFeedback === 0) return <p>No feedback yet</p>;

  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <div className={style.block}>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive feedback: {positiveFeedback}%</p>
    </div>
  );
}
