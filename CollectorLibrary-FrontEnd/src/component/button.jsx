import styles from "./button.module.css";

export default function OtroButon({ Text, IconRef, onClick }) {
  return (
    <button className={styles.btn} onClick={onClick}>
      <svg height="20px" width="20px">
        <use href={IconRef}></use>
      </svg>
      {Text}
    </button>
  );
}