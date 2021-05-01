import MainHeaders from '../components/commons/MainHeaders';
import styles from '../styles/Home.module.css';

export default function Services() {
  return (
    <>
      <MainHeaders
        title="About next"
        description="Next generation for web development"
      />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/">About!</a>
        </h1>
        <div></div>
      </main>
    </>
  );
}
