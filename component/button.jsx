import react from "react";
import styles from "./button.module.css";

export function OtroButton({ Text, IconRef, SiteRef })
{
    return <button className={styles.btn}>
        <a href={SiteRef} target="_blank">
            <svg
                role="presentation"
                aria-hidden="true"
                height="20px"
                width="20px">
            <use href={IconRef}></use>
            </svg>
        {Text}
        </a>
    </button>;
}