import Head from 'next/head';
import Link from 'next/link';
import Img from 'next/image';
import { groq } from 'next-sanity';
import { Section } from '../components/designSystem/layout';

import Typo from '../components/typography';

// import { getSortedPostsData } from '../lib/posts'
import InterventionPlace from '../screens/interventionPlace';

import {
  getClient,
  usePreviewSubscription,
  urlFor,
  PortableText,
} from '../lib/sanity';

const postQuery = groq`*[_type == 'storeSettings'][0]{
  name,
  address,
  openinghours,
  phonenumber,
  interventiondistance,
  geocoords,
  "socialnetworks": *[_type == "socialnetwork"]
}`;

export async function getStaticProps({ preview = false }) {
  // const donnees = await getClient(preview).fetch(postQuery)

  const donnees = {};

  return {
    props: {
      preview,
      data: donnees,
    },
  };
}

export default function Index({ data, preview }) {
  const { data: paramsEnterprise } = usePreviewSubscription(postQuery, {
    initialData: data,
    enabled: preview,
  });

  const { address, name } = paramsEnterprise;

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Bijoul</title>
        <meta
          name="description"
          content="Homecano, c'est 95% de l'entretien d'un véhicule, où vous voulez"
        />
      </Head>
      <Section className="bg-white">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center bg-white rounded-xl shadow-lg">
            <div className="bg-yellow-300 bg-opacity-70 rounded-2xl md:rounded-none md:rounded-l-2xl p-8 flex flex-col gap-2">
              <h3 className="text-sm">Gagnez votre temps</h3>
              <p className="text-3xl">
                N'attendez plus au garage. C'est lui qui vient à vous.
              </p>

              <p>Chez vous, sur votre lieu de travail. En bord de mer…</p>
            </div>

            <div className="relative">
              <img
                width="600"
                height="400"
                className="md:rounded-none md:rounded-r-2xl"
                objectFit="cover"
                alt="Site vitrine sur mesure"
                src="/images/cles12.jpg"
              />
            </div>
          </div>
        </div>

        <h2 className="text-4xl bg-yellow-300 transform -rotate-2 p-12 sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mb-8 sm:mt-14 sm:mb-10">
          Un technicien automobile qui vient à vous !
        </h2>

        <div className="grid relative">
          <div className="absolute w-full h-60 transform rotate-1 bg-cyan-300 bg-opacity-40 rounded-xl" />
          <p className="relative p-8 m-4 bg-gray-200 bg-opacity-30">
            Bonjour, bienvenue
          </p>

          <div className="p-8">
            <p className="mt-2 text-gray-500">
              Getting a new business off the ground is a lot of hard work. Here
              are five ideas you can use to find your first customers.
            </p>
          </div>
        </div>
        <Typo />
        <Typo />
        <Typo />
        <Typo />
        <Typo />
        <Typo />
        <Typo />
        <Typo />
        <Typo />
        <Typo />
        <Typo />
        <Typo />
        <Typo />
        <InterventionPlace
          center={paramsEnterprise.geocoords}
          distanceMax={paramsEnterprise.interventiondistance}
        />
      </Section>

      {/* <Img
        width={400}
        height={300}
        alt="car"
        src="https://images-na.ssl-images-amazon.com/images/I/71fcXUoSyXL._AC_SL1500_.jpg"
        className="detourage"
      /> */}
      <div>{name}</div>
    </>
  );
}
