import styles from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positivePercentage }) => {
  return (
    <div className={styles.feedback}>
      <h2>Feedback Statistics</h2>
      <ul>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive Feedback: {positivePercentage}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
