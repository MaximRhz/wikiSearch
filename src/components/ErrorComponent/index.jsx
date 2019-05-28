import React from "react";
import styles from "./styles.module.css";

const ErrorComponent = ({ children }) => {
  return <div className={styles.error}>{children}</div>;
};

export default ErrorComponent;
