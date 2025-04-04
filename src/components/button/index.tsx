
"use client";

import { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.css';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {

}

export default function Button({ children }: IButton) {
  return (
    <button onClick={() => window.open('https://www.linkedin.com/in/danielbarbosa0/', '_blank')} className={styles.button}>
      <span>{children}</span>
    </button>
  );
}