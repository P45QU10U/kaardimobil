import Head from 'next/head';
import { useAppContext } from './_app';
import { Section } from '../components/designSystem/layout';

import { useInterventionContext } from '../context/InterventionContext';
import { generateJsonLD } from '../utils/JsonLD';
import ContactFormWhook from '../components/ContactFormWhook';

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
          content="Ho'Mecano, garage mobile tous véhicules, tout pour nous contacter"
        />
        {generateJsonLD(params)}
      </Head>
      <Section className="mb-8">
        <ContactFormWhook address={displayAddress} />
      </Section>
    </div>
  );
}
