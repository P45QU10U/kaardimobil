import '../styles/globals.css';
import { groq } from 'next-sanity';
import { createContext } from 'react';
import Skeleton from '../components/skeleton';
import { getClient } from '../lib/sanity';

export const ParamStore = createContext();

function MyApp({ Component, pageProps, params }) {
  return (
    <ParamStore.Provider value={params}>
      <Skeleton>
        <Component {...pageProps} />
      </Skeleton>
    </ParamStore.Provider>
  );
}

const postQuery = groq`*[_type == 'storeSettings'][0]{
  name,
  address,
  postalcode,
  city,
  openinghours,
  phonenumber,
  interventiondistance,
  geocoords,
  "socialnetworks": *[_type == "socialnetwork"]
}`;

MyApp.getInitialProps = async (ctx) => {
  const paramsstore = await getClient().fetch(postQuery);
  return { params: paramsstore };
};

export default MyApp;
