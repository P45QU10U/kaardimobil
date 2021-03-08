import Head from 'next/head';
import { useAppContext } from './_app';

import { useInterventionContext } from '../context/InterventionContext';
import { generateJsonLD } from '../utils/JsonLD';

export default function Contact() {
  const params = useAppContext();
  const { intervention } = useInterventionContext();
  const displayAddress = intervention.address?.properties?.label;

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Contactez Ho'Mecano</title>
        <meta
          name="description"
          content="Ho'Mecano, garage mobile tous véhicules, nos coordonnées"
        />
        {generateJsonLD(params)}
      </Head>
      Votre lieu d'intervention : {displayAddress}
    </div>
  );
}
