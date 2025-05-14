import styles from "./Buttons.module.scss";

export function Button({ className, onClick, children }) {
  const classes = [styles.button, className].filter(Boolean).join(" ");

  return (
    <button
      className={classes}
      onClick={onClick}>
      {children}
    </button>
  );
}

export function LinkButton({ className, href, target, children }) {
  const classes = [styles.button, className].filter(Boolean).join(" ");

  return (
    <a
      href={href}
      target={target}
      className={classes}>
      {children}
    </a>
  );
}
