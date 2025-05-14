import { Fragment } from "react";
import styles from "./App.module.scss";
import DetextForm from "./components/DetextForm/DetextForm.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Main />
    </Fragment>
  );
}

function Main() {
  return (
    <section id={styles.banner}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <GradientBlob />
          <Texts />
          <DetextForm />
        </div>
      </div>
    </section>
  );
}

function GradientBlob() {
  return (
    <img
      draggable={false}
      alt="gradient blob"
      className={styles.gradientBlob}
      src="/assets/images/misc/gradient-blob.png"
    />
  );
}

function Texts() {
  return (
    <div className={styles.texts}>
      <h1>Fraudulent Text Detection</h1>
      <p>
        AI-powered web-app that detects deceptive or fraudulent text even if
        it's email or sms.
      </p>
    </div>
  );
}

export default App;
