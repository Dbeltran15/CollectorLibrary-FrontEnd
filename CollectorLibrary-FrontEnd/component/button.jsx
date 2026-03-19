import React from "react";
import styles from "./button.module.css";

export default function OtroButon({ Text, IconRef, SiteRef }) {
  return (
    <a
      href={SiteRef}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.btn}
    >
      <svg
        role="presentation"
        aria-hidden="true"
        height="20px"
        width="20px"
      >
        <use href={IconRef}></use>
      </svg>
      {Text}
    </a>
  );
}