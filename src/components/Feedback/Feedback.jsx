import style from "./feedback.module.css";

export default function Feedback({
  feedback,
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <div>
      <div className={style.block}>
        <p>Good: {feedback.good}</p>
        <p>Neutral: {feedback.neutral}</p>
        <p>Bad: {feedback.bad}</p>
      </div>
      <div className={style.block}>
        <p>Total: {totalFeedback}</p>
        <p>Positive feedback: {positiveFeedback}%</p>
      </div>
    </div>
  );
}
