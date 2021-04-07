import '../styles/globals.css';
import { groq } from 'next-sanity';
import { createContext, useContext } from 'react';
import Skeleton from '../components/Skeleton';
import { getClient } from '../lib/sanity';
import { InterventionWrapper } from '../context/InterventionContext';

export const ParamStore = createContext();

export function useAppContext() {
  return useContext(ParamStore);
}

function MyApp({ Component, pageProps, params }) {
  return (
    <ParamStore.Provider value={params}>
      <InterventionWrapper>
        <Skeleton entprops={params}>
          <Component {...pageProps} />
        </Skeleton>
      </InterventionWrapper>
    </ParamStore.Provider>
  );
}

const postQuery = groq`*[_type == 'storeSettings'][0]{
  name,
  address,
  siret,
  postalcode,
  city,
  openinghours,
  phonenumber,
  interventiondistance,
  geocoords,
  offers[]->,
  "socialnetworks": *[_type == "socialnetwork"] {
    name,
    nickname,
    socialnetworkurl,
    socialnetworkicon {
      asset->{
        url
      }
    }
  },
  pricesexamples[]->{ name, defaultProductVariant }	
}`;

MyApp.getInitialProps = async (ctx) => {
  const paramsstore = await getClient().fetch(postQuery);
  return { params: paramsstore };
};

export default MyApp;
