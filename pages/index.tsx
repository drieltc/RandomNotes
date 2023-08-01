import Head from 'next/head';
import SettingsBar from '../components/SettingsBar';
import DisplayArea from '../components/DisplayArea';
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Random Notes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <SettingsBar />

      <main>
        <DisplayArea/>
      </main>

      <Footer />
    </div>
  )
}
