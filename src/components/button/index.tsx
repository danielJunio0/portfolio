import styles from './styles.module.css';

export default function Button({ children }: any) {
  return (
    <button className={styles.button}>
      <span>{children}</span>
    </button>
  );
}