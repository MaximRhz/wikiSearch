import React from "react";
import logo from "./logo.png";
import styles from "./styles.module.css";

function Logo() {
  return <img className={styles.logo} src={logo} alt="Logo" />;
}

export default Logo;
