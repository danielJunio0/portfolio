
"use client";

import styles from './styles.module.css';
export default function Button({ children }: any) {
  return (
    <button onClick={() => window.open('https://www.linkedin.com/in/danielbarbosa0/', '_blank')} className={styles.button}>
      <span>{children}</span>
    </button>
  );
}