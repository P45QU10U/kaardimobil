import Head from 'next/head';
import Link from 'next/link';
import Img from 'next/image';
import { groq } from 'next-sanity';
import {
  FaArrowCircleRight,
  FaCashRegister,
  FaCheckCircle,
  FaStopwatch,
} from 'react-icons/fa';
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
  // Just for the moment, disconnect from Sanity
  // const donnees = await getClient(preview).fetch(postQuery);
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

      <Section>
        <FaStopwatch className="text-pink-500 text-3xl mb-4" title="parasol" />
        <h2 className="uppercase text-2xl text-pink-500">Gagnez du temps</h2>
        <h3 className="text-6xl font-extrabold">N'attendez plus au garage</h3>

        <div className="grid grid-cols-2 gap-2">
          <p className="text-gray-500 text-2xl">
            C'est le garage qui vient à vous. Après, si vous m'amenez à
            travailler ici, le bruit des vagues aidera le temps de la
            réparation.
          </p>
          <div className="relative place-self-center">
            <Img
              layout="intrinsic"
              width="200"
              height="200"
              className="rounded-lg"
              objectFit="cover"
              alt="Combi Volkswagen au bord de la mer"
              src="/images/geoffroy-hauwen-Upg453Fo7wU-unsplash.jpg"
            />
          </div>
        </div>

        <Link href="/contact">
          <a className="text-xl text-pink-500 no-underline inline-block mb-12 border-pink-500 hover:border-pink-700 hover:text-pink-700 hover:shadow-sm border-2 p-3 rounded-lg">
            Prendre rendez-vous <FaArrowCircleRight className="inline ml-2" />
          </a>
        </Link>
        <ul>
          <li>
            <FaCheckCircle className="inline text-green-600" /> Chantier propre
          </li>
        </ul>
      </Section>

      <div className="grid relative overflow-hidden">
        <div className="absolute mt-8 inset-0 -ml-24 -mr-24 bg-yellow-200 transform rotate-2" />

        <Section className="relative mt-8">
          <FaCashRegister
            className="text-cyan-700 text-3xl mb-4"
            title="caisse enregistreuse"
          />
          <h2 className="uppercase text-2xl text-cyan-800">Moins cher</h2>
          <h3 className="text-6xl font-extrabold">Des prix tout doux</h3>
          <p className="text-gray-500 text-2xl">
            Votre facture sera plus légère. Si un fusible est grillé, le devis
            n'affichera pas un système électrique à remplacer.
          </p>
          <p className="text-gray-500 text-2xl">
            Chez Ho'Mecano, on ne vous changera que le fusible.
          </p>

          <Link href="/prestations">
            <a className="text-xl text-cyan-800 no-underline inline-block mb-12 border-cyan-800 hover:border-cyan-900 hover:text-cyan-900 hover:shadow-md border-2 p-3 rounded-lg">
              Consultez les tarifs{' '}
              <FaArrowCircleRight className="inline ml-2" />
            </a>
          </Link>
        </Section>
      </div>
      <Section className="relative">
        <h2 className="text-4xl bg-yellow-300 transform rotate-2 p-12 sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mb-8 sm:mt-14 sm:mb-10">
          Un technicien automobile qui vient à vous !
        </h2>

        <Typo />
        <Typo className="font-mono" />
        <Typo className="font-serif" />

        <InterventionPlace
          center={paramsEnterprise.geocoords}
          distanceMax={paramsEnterprise.interventiondistance}
        />
      </Section>

      <div>ici le name {name}</div>
    </>
  );
}
