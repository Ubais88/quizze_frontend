import React from "react";
import styles from "./Congrats.module.css";
import trophy from "../../assets/trophy.png";

const Congrats = ({
  quizType,
  totalQuestions,
  correctAnswers,
}) => {
  return (
    <div className={styles.congratsContainer}>
      <div className={styles.congratsModal}>
        {quizType === "Poll" ? (
          <p className={styles.textPolltype}>
            Thank you for participating in the Poll
          </p>
        ) : (
          <>
            <p className={styles.text}>Congrats Quiz is completed</p>

            <div className={styles.congratsImage}>
              <img
                src={trophy}
                alt="Congratulations"
                className={styles.image}
              />
            </div>
            <div className={styles.congratsScore}>
              <p className={styles.text}>Your Score is </p>
              <span className={styles.highlightedText}>
                {" "}
                {correctAnswers}/{totalQuestions}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Congrats;
