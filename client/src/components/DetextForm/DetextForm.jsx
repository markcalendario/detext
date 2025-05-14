import {
  faMagnifyingGlass,
  faSpinner
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button } from "../Buttons/Buttons.jsx";
import FraudDonut from "../FraudDonut/FraudDonut.jsx";
import styles from "./DetextForm.module.scss";

export default function DetextForm() {
  const [text, setText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState({
    fraudConfidence: 0,
    safeConfidence: 100
  });

  const handleTextareaChange = (evt) => setText(evt.target.value);

  const handleAnalyzeClick = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);

    const url = import.meta.env.VITE_SERVER_URL + "/detext";
    const config = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ text })
    };

    const request = await fetch(url, config);
    const response = await request.json();

    setIsSubmitting(false);

    setResult({
      fraudConfidence: response.data.fraud_confidence,
      safeConfidence: response.data.safe_confidence
    });
  };

  return (
    <div className={styles.detextForm}>
      <div className={styles.form}>
        <textarea
          value={text}
          placeholder="Insert text here"
          onChange={handleTextareaChange}
        />

        <Button onClick={handleAnalyzeClick}>
          {isSubmitting ? (
            <FontAwesomeIcon
              icon={faSpinner}
              spin
            />
          ) : (
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          )}
          Analyze Text
        </Button>
      </div>
      <div className={styles.result}>
        <h1 className={styles.title}>Analysis Result</h1>
        <div className={styles.doughnutWrapper}>
          <FraudDonut
            safeConfidence={result.safeConfidence}
            fraudConfidence={result.fraudConfidence}
          />
        </div>
      </div>
    </div>
  );
}
