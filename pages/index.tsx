import Head from 'next/head';
import MainHeaders from '../components/commons/MainHeaders';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <MainHeaders
        title="Next generation app - MM"
        description="Next generation for web development"
      />
      <div></div>
      {/* <Headers /> */}
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/about">Next page!</a>
        </h1>
      </main>
    </>
  );
}
