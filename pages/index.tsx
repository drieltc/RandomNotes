import Head from 'next/head';
import { SettingsContextProvider } from '../src/config/context/SettingsContext';
import SettingsBar from '../src/components/SettingsBar';
import DisplayArea from '../src/components/DisplayArea/DisplayArea';
import styles from '../styles/Home.module.css';
import Footer from '../src/components/Footer/Footer';
import Header from '../src/components/Header/Header';

export default function Home() {

  return (
        <div className={styles.container}>
          <Head>
            <title>Random Notes</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Header />

          <SettingsContextProvider >
            <SettingsBar />

            {/*<main>
              <DisplayArea />
            </main>*/}
          </SettingsContextProvider>

          <Footer />
        </div>
  );
}
