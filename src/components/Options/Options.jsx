import styles from "./Options.module.css";

const Options = ({ options, updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className={styles.options}>
      {options.map((option) => (
        <button
          key={option}
          className={styles.button}
          onClick={() => updateFeedback(option)}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button className={styles.reset} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
