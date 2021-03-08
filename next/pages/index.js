import Head from 'next/head';
import Link from 'next/link';

import Img from 'next/image';
import { groq } from 'next-sanity';

import {
  FaLocationArrow,
  FaArrowCircleRight,
  FaCashRegister,
  FaCheckCircle,
  FaStopwatch,
  FaShippingFast,
} from 'react-icons/fa';
import { Section } from '../components/designSystem/layout';
import { useAppContext } from './_app';

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
  // const { data: paramsEnterprise } = usePreviewSubscription(postQuery, {
  //   initialData: data,
  //   enabled: preview,
  // });

  const { name, geocoords, interventiondistance } = useAppContext();

  const possibleDistances = interventiondistance
    .map((e) => [e.distance, e.price])
    .sort((a, b) => {
      if (a[0] < b[0]) {
        return -1;
      }
      return 1;
    });

  const [distancemax] = possibleDistances[possibleDistances.length - 1];

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{name}</title>
        <meta
          name="description"
          content="Ho'Mecano, garage mobile tous véhicules, où vous le souhaitez"
        />
      </Head>

      <Section className="mb-8">
        <FaStopwatch
          className="text-orange-500 text-3xl mb-4"
          title="chronomètre"
        />
        <h2 className="uppercase text-2xl text-orange-500">Gagnez du temps</h2>
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
          <a className="text-xl text-orange-500 no-underline inline-block mb-12 border-orange-500 hover:border-orange-700 hover:text-orange-700 hover:shadow-sm border-2 p-3 rounded-lg">
            Prendre rendez-vous <FaArrowCircleRight className="inline ml-2" />
          </a>
        </Link>
        <ul className="text-xl">
          <li>
            <FaCheckCircle className="inline text-green-600" /> Chantier propre
          </li>
          <li>
            <FaCheckCircle className="inline text-green-600" /> Ne répare que ce
            qui est nécessaire. On prend soin de notre{' '}
            <span role="img" aria-label="terre">
              🌍
            </span>
          </li>
        </ul>
      </Section>

      <Section className="mt-8 relative">
        <FaLocationArrow
          className="text-gray-400 text-3xl mb-4"
          title="direction"
        />
        <h2 className="uppercase text-2xl text-gray-400">Atelier mobile</h2>
        <h3 className="text-6xl font-extrabold text-transparent bg-gradient-to-t bg-clip-text from-orange-700 to-orange-500">
          C'est le mécanicien qui vient à vous
        </h3>
        <p className="text-gray-500 text-2xl">
          Je me déplace dans un rayon de {distancemax}km autour de mon domicile
        </p>

        <p className="text-gray-500 text-2xl">
          Renseignez votre lieu d'intervention
        </p>
        <InterventionPlace
          center={geocoords}
          distanceMax={interventiondistance}
        />
      </Section>

      <div className="relative mt- overflow-hidden">
        <div className="absolute -left-10 -right-10 topography h-full transform rotate-2" />

        <Section className="mt-24 mb-24 relative bg-opacity-60 bg-white ">
          <FaLocationArrow
            className="text-gray-400 text-3xl mb-4"
            title="direction"
          />
          <h2 className="uppercase text-2xl text-gray-400">Atelier mobile</h2>
          <h3 className="text-6xl font-extrabold text-transparent bg-gradient-to-t bg-clip-text from-orange-700 to-orange-500">
            C'est le mécanicien qui vient à vous
          </h3>
          <p className="text-gray-500 text-2xl">
            Je me déplace dans un rayon de {distancemax}km autour de mon
            domicile
          </p>

          <p className="text-gray-500 text-2xl">
            Renseignez votre lieu d'intervention
          </p>
          <InterventionPlace
            center={geocoords}
            distanceMax={interventiondistance}
          />
        </Section>

        <div className="absolute -bottom-16 -left-5 -right-5 h-24 bg-white transform  rotate-2" />
      </div>

      <div className="grid relative overflow-hidden">
        <div className="absolute mt-8 inset-0 -ml-24 -mr-24 bg-orange-300 transform rotate-2" />

        <Section className="relative mt-8 mb-12">
          <FaCashRegister
            className="text-cyan-700 text-3xl mb-4"
            title="caisse enregistreuse"
          />
          <h2 className="uppercase text-2xl text-cyan-800">
            Tarifs attractifs
          </h2>
          <h3 className="text-6xl font-extrabold">Des prix tout doux</h3>
          <p className="text-gray-500 text-2xl">
            Votre facture sera plus légère. Si un fusible est grillé, le devis
            n'affichera pas un système électrique à remplacer.
          </p>
          <p className="text-gray-500 text-2xl">
            Chez Ho'Mecano, on ne vous changera que le fusible.
          </p>

          <Link href="/tarifs">
            <a className="text-xl text-cyan-800 no-underline inline-block mb-12 border-cyan-800 hover:border-cyan-900 hover:text-cyan-900 hover:shadow-md border-2 p-3 rounded-lg">
              Consultez les tarifs{' '}
              <FaArrowCircleRight className="inline ml-2" />
            </a>
          </Link>
        </Section>
        <div className="absolute -bottom-16 -left-5 -right-5 h-24 bg-white transform  rotate-2" />
      </div>
      <Section>
        <FaShippingFast
          className="text-orange-500 text-3xl mb-4"
          title="chronomètre"
        />
        <h2 className="uppercase text-2xl text-orange-500">
          Vous êtes pressés ?
        </h2>
        <h3 className="text-6xl font-extrabold">Prise de rendez-vous rapide</h3>

        <div className="grid grid-cols-2 gap-2">
          <p className="text-gray-500 text-2xl">
            Sur votre lieu de travail, pendant vos courses. Selon vos besoins,
            nous pouvons planifier au mieux votre rendez-vous.
          </p>
        </div>

        <Link href="/contact">
          <a className="text-xl text-orange-500 no-underline inline-block mb-12 border-orange-500 hover:border-orange-700 hover:text-orange-700 hover:shadow-sm border-2 p-3 rounded-lg">
            Prendre rendez-vous <FaArrowCircleRight className="inline ml-2" />
          </a>
        </Link>
      </Section>
    </>
  );
}
