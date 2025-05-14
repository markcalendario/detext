import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button } from "../Buttons/Buttons.jsx";
import FraudDonut from "../FraudDonut/FraudDonut.jsx";
import styles from "./DetextForm.module.scss";

export default function DetextForm({ onSubmit, fraudConfidence }) {
  const [text, setText] = useState("");

  const handleTextareaChange = (evt) => setText(evt.target.value);

  return (
    <div className={styles.detextForm}>
      <div className={styles.form}>
        <textarea
          value={text}
          placeholder="Insert text here"
          onChange={handleTextareaChange}
        />

        <Button onClick={onSubmit}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          Analyze Text
        </Button>
      </div>
      <div className={styles.result}>
        <h1 className={styles.title}>Analysis Result</h1>
        <div className={styles.doughnutWrapper}>
          <FraudDonut fraudConfidence={fraudConfidence || 0} />
        </div>
      </div>
    </div>
  );
}
