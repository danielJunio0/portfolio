import styles from './styles.css';

export default function Button({ children }) {
  return (
    <button className={styles.button}>
      <span>{children}</span>
    </button>
  );
}