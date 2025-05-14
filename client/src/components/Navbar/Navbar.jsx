import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkButton } from "../Buttons/Buttons.jsx";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.brand}>
            <img
              src="/assets/images/logo/detext.png"
              alt="detext logo"
            />
            <h1>Detext</h1>
          </div>

          <div className={styles.links}>
            <LinkButton
              target="_blank"
              className={styles.githubLink}
              href="https://github.com/markcalendario/detext">
              <FontAwesomeIcon icon={faGithubAlt} />
              Visit
            </LinkButton>
          </div>
        </div>
      </div>
    </nav>
  );
}
