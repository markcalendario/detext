import { useState } from "react";
import styles from "./DetextForm.module.scss";

export default function DetextForm() {
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
      </div>
      <div className={styles.result}>
        <h1 className={styles.title}>Analysis Result</h1>
      </div>
    </div>
  );
}
