import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const apiEndpoint = 'https://api.mcstatus.io/v2/status/java/mc.hypixel.net';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [playerCount, setPlayerCount] = useState<number | null>(null);

  useEffect(() => {
    async function fetchPlayerCount() {
      try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        setPlayerCount(data.players.online);
      } catch (error) {
        console.error('Error fetching player count:', error);
      }
    }

    fetchPlayerCount();
  }, []);

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <script src="https://twemoji.maxcdn.com/v/latest/twemoji.min.js"></script>
      <div className="container">
        <Heading as="h1" className={styles.hero__title}>
          {siteConfig.title}
        </Heading>
        <p className={styles.hero__subtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--danger button--md"
            to="https://magaza.luckmc.net">
            Mağaza
          </Link>
          <Link
            className="button button--secondary button--md"
            to="/blog">
            Blog
          </Link>
          <Link
            className="button button--secondary button--md"
            to="/kurallar">
            Kurallar
          </Link>
        </div>
        <div className={styles.playerCount}>
          <div className={styles.blinkingCircle}></div>
          <h2>{playerCount !== null ? playerCount : 'Yükleniyor...'} oyuncu LuckMC oynuyor.</h2>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
