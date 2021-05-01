import MainHeaders from '../components/commons/MainHeaders';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <MainHeaders
        title="Mahady Manana - Official website"
        description="Mahady Manana is a Malagasy Javascript Developer, Mahady Manana build a modern UI with Nodejs, Reactjs, Material UI, Javascript/Typescript."
      />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/about">Next page!</a>
        </h1>
      </main>
    </>
  );
}
