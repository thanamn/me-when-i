import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title" style={{fontSize: '3.5rem', marginBottom: '1rem'}}>
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle" style={{fontSize: '1.4rem', marginBottom: '1.5rem'}}>
          {siteConfig.tagline}
        </p>
        <div style={{
          margin: '2rem auto', 
          fontSize: '1.2rem', 
          fontStyle: 'italic',
          maxWidth: '900px',
          lineHeight: '1.4',
          opacity: '0.95'
        }}>
          The Semantics of Incompletion: A Critical Examination of the 'Me When I' Tim Cook Meme in Post-Ironic Digital Culture
        </div>
        <div style={{
          margin: '1.5rem auto 2.5rem', 
          fontSize: '1.05rem', 
          maxWidth: '700px',
          lineHeight: '1.5',
          opacity: '0.9'
        }}>
          An interdisciplinary thesis analyzing how incomplete digital expressions create meaning 
          through semiotics, deconstruction, and affect theory.
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/00_title-page"
            style={{fontSize: '1.1rem', padding: '0.8rem 2rem'}}>
            Read the Thesis 📖
          </Link>
        </div>
        <div style={{
          marginTop: '2rem',
          fontSize: '1rem',
          opacity: '0.9'
        }}>
          <Link 
            to="/docs/01_abstract" 
            style={{
              color: 'rgba(255,255,255,0.9)', 
              textDecoration: 'underline',
              marginRight: '2rem'
            }}>
            Abstract
          </Link>
          <Link 
            to="/docs/04_toc" 
            style={{
              color: 'rgba(255,255,255,0.9)', 
              textDecoration: 'underline',
              marginRight: '2rem'
            }}>
            Table of Contents
          </Link>
          <Link 
            to="/docs/14_works_cited" 
            style={{
              color: 'rgba(255,255,255,0.9)', 
              textDecoration: 'underline'
            }}>
            Bibliography
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Digital Thesis`}
      description="A critical examination of the 'Me When I' Tim Cook meme in post-ironic digital culture. An academic thesis analyzing incomplete expressions in contemporary internet communication.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
