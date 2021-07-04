import Head from 'next/head';
import Link from 'next/link';

import Img from 'next/image';
import { groq } from 'next-sanity';

import {
  FaRunning,
  FaFeather,
  FaLocationArrow,
  FaArrowCircleRight,
  FaCashRegister,
  FaCheckCircle,
  FaStopwatch,
  FaShippingFast,
} from 'react-icons/fa';
import { useState } from 'react';
import { Section } from '../components/designSystem/layout';
import { useAppContext } from './_app';

// import { getSortedPostsData } from '../lib/posts'
import InterventionPlace from '../components/interventionPlace';

import {
  getClient,
  usePreviewSubscription,
  urlFor,
  PortableText,
} from '../lib/sanity';
import { JoshButtonLink } from '../components/designSystem/Links';
import Promotions from '../components/Promotions';

const postQuery = groq`*[_type == 'storeSettings'][0]{
  name,
  address,
  openinghours,
  phonenumber,
  interventiondistance,
  pricesexamples,
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

  const {
    name,
    address,
    geocoords,
    pricesexamples,
    interventiondistance,
  } = useAppContext();

  const tout = useAppContext();

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
      <Promotions />
      <Section className="mb-8">
        <FaStopwatch
          className="text-orange-500 text-3xl mb-4"
          title="chronomètre"
        />
        <h2 className="uppercase text-2xl text-orange-500">Gagnez du temps</h2>
        <h3 className="pb-2 text-6xl font-extrabold text-transparent bg-gradient-to-t bg-clip-text from-orange-700 to-orange-500">
          N'attendez plus au garage
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="relative place-self-center">
            <Img
              layout="intrinsic"
              width="400"
              height="400"
              className="rounded-lg"
              objectFit="cover"
              alt="Thé ou café à la maison"
              src="/images/daiga-ellaby-3LbpZo8MG8A-unsplash.jpg"
            />
          </div>
          <div className="flex flex-col justify-evenly ">
            <p className="text-gray-500 text-4xl">
              C'est le garage qui vient à vous.
            </p>
            <p className="text-gray-500 text-3xl">
              Quelle meilleure salle d'attente que votre chez vous&nbsp;?
            </p>
            <JoshButtonLink href="/contact">
              Prendre rendez-vous <FaArrowCircleRight className="inline ml-2" />
            </JoshButtonLink>
          </div>
        </div>
      </Section>

      <div className="relative mt-8 overflow-hidden">
        <div className="absolute -left-10 -right-10 topography h-full" />
        <Section className="mt-24 mb-24 relative bg-opacity-80 p-4 md:p-10 bg-white border md:shadow-lg md:rounded-2xl">
          <FaLocationArrow
            className="text-gray-400 text-3xl mb-4"
            title="direction"
          />
          <h2 className="uppercase text-2xl text-gray-400">Atelier mobile</h2>
          <h3 className="text-6xl font-extrabold text-transparent bg-gradient-to-t bg-clip-text from-orange-700 to-orange-500">
            Testez si je peux venir jusqu'à vous
          </h3>
          <p className="text-gray-500 text-2xl">
            J'opère dans un rayon de {distancemax}km autour de {address.city}{' '}
            <span className="text-sm">(voire plus selon les cas)</span>
          </p>

          <InterventionPlace
            center={geocoords}
            distanceMax={interventiondistance}
          />
        </Section>
      </div>

      <div className="grid bg-gradient-to-tr from-orange-300 to-orange-500 relative overflow-hidden mb-6">
        <Section className="relative mt-8 mb-12">
          <FaCashRegister
            className="text-gray-800 text-3xl mb-4"
            title="caisse enregistreuse"
          />
          <h2 className="uppercase text-2xl text-gray-800">
            Mini Prix, <span className="text-gray-900">MAXI Quality</span> !
          </h2>
          <h3 className="text-6xl font-extrabold text-transparent bg-gradient-to-t bg-clip-text from-gray-800 to-gray-600">
            Des prix légers pour des réparations de qualité
          </h3>
          <p className="text-gray-700 text-2xl">
            Votre banquier va m'aimer, et votre voiture aussi.
          </p>

          <h4 className="text-gray-800">Exemples de prix</h4>

          <ul className="mb-4 p-4">
            {pricesexamples.map((examp, i) => (
              <li key={`exprice${i}`}>
                {examp.name}: {examp.defaultProductVariant.title}{' '}
                {examp.defaultProductVariant.price}
              </li>
            ))}
          </ul>

          <JoshButtonLink
            bgEdge="bg-gray-300"
            bgFront="bg-gray-100"
            textColor="text-gray-900"
            href="/tarifs"
          >
            Consulter les tarifs <FaArrowCircleRight className="inline ml-2" />
          </JoshButtonLink>
        </Section>
      </div>

      <Section>
        <FaRunning
          className="text-orange-500 text-3xl mb-4"
          title="chronomètre"
        />
        <h2 className="uppercase text-2xl text-orange-500">
          Vous êtes pressés ?
        </h2>
        <h3 className="text-6xl font-extrabold">Prise de rendez-vous rapide</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <p className="text-gray-500 text-2xl">
            Sur votre lieu de travail, pendant vos courses. Selon vos besoins,
            nous pouvons planifier au mieux votre rendez-vous.
          </p>
        </div>

        <JoshButtonLink href="/contact">
          Prendre rendez-vous <FaArrowCircleRight className="inline ml-2" />
        </JoshButtonLink>
      </Section>
      <Section>
        <h3 className="text-6xl font-extrabold">Les garanties {name}</h3>
        <ul className="text-xl space-y-2">
          <li>
            <FaCheckCircle className="inline text-green-600" /> 34 points de
            contrôle inclus
          </li>
          <li>
            <FaCheckCircle className="inline text-green-600" /> Chantier propre
          </li>
          <li>
            <FaCheckCircle className="inline text-green-600" /> Ne répare que ce
            qui est nécessaire. On prend soin de notre terre{' '}
            <span role="img" aria-label="planète bleue">
              🌍
            </span>{' '}
            et de votre porte-monnaie
          </li>
          <li>
            <FaCheckCircle className="inline text-green-600" /> Pièces, main
            d'oeuvre et sourire garantis{' '}
            <span role="img" aria-label="visage rieur">
              😄
            </span>{' '}
            !
          </li>
        </ul>
      </Section>
    </>
  );
}
