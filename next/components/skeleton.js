import Head from 'next/head';

import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';
import '@reach/skip-nav/styles.css';
import Img from 'next/image';
import Header from './Header';
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
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Homecano, Garage à domicile" />
      </Head>
      {/* <Splash> */}
      {/* <div className="bg-header bg-cover bg-green-200"> */}
      <div className="relative min-h-half">
        <div className="absolute inset-0 overflow-hidden bg-blue-400 bg-opacity-40">
          <Img
            layout="fill"
            // layout="responsive"
            // width={400}
            // height={300}
            className="absolute opacity-20"
            objectFit="cover"
            src="/images/jesse-bowser-c0I4ahyGIkA-unsplash.jpg"
            alt=""
          />
          <div className="absolute -bottom-16 -left-5 -right-5 h-40 bg-white transform  rotate-2"></div>
        </div>
        <Header />
      </div>

        <SkipNavContent
          style={{
            scrollMarginTop: '12rem',
            position: 'relative',
          }}
        >
          <main>{children}</main>
        </SkipNavContent>

      {/* <Section>
          <Coords />
        </Section> */}
      {/* </Splash> */}

      <Footer />
    </>
  );
}
