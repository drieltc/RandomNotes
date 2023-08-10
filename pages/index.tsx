import Head from 'next/head';
import { SettingsProvider } from '../components/SettingsContext';
import { SecondarySettingsProvider } from '../components/SecondarySettingsContext';
import SettingsBar from '../components/SettingsBar';
import DisplayArea from '../components/DisplayArea';
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Home() {

  const defaultSelectedOptions = {
    playMode: ['zen'],
    displayMode: ['notes'],
    whatToDisplay: ['symbol'],
  };

  return (
    <SettingsProvider defaultSelectedOptions={defaultSelectedOptions}>
      <SecondarySettingsProvider>
      <div className={styles.container}>
        <Head>
          <title>Random Notes</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <SettingsBar />

        <main>
          <DisplayArea />
        </main>

        <Footer />
      </div>
      </SecondarySettingsProvider>
    </SettingsProvider>
  );
}
