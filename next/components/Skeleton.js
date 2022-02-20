import Head from 'next/head';

import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';
import '@reach/skip-nav/styles.css';

import Header from './Header';
import Favicon from './Favicon'
import Footer from './Footer';
import Splash from './Splash';
import Coords from './Coords';
import { Section } from './designSystem/layout';

export const appendSiteTitle = ' - Homecano';

export default function Skeleton({ children }) {
  return (
    <>
      <SkipNavLink>passer au contenu</SkipNavLink>

      <Head>
        <link rel="icon" href="/favicon.ico.png" />
        <Favicon />
        <meta name="description" content="Homecano, Garage à domicile" />
      </Head>

      <Header />

      <SkipNavContent
        style={{
          scrollMarginTop: '12rem',
          position: 'relative',
        }}
      >
        <main>{children}</main>
      </SkipNavContent>

      <Footer />
    </>
  );
}
