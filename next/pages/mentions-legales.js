import Head from 'next/head';
import { Section } from '../components/designSystem/layout';
import { useAppContext } from './_app';

export default function Mentionslegales() {
  const { name, address, siret, publisher, phonenumber } = useAppContext();

  const tout = useAppContext();

  return (
    <>
      <Head>
        <title>{`Mentions légales - ${name}`}</title>
      </Head>
      <Section>
        <h2>Editeur</h2>
        <ul className="mb-4">
          <li>Responsable de la publication : {publisher}</li>
          <li>
            <address>
              {address.streetNo} {address.street} , {address.postalcode}{' '}
              {address.city}, France
            </address>
          </li>
          <li>
            <abbr title="numéro">N°</abbr> SIRET : {siret}
          </li>
          <li>
            <abbr title="Numéro de téléphone">Tél. :</abbr>{' '}
            <a href={`tel:+33${phonenumber.slice(1)}`}>{phonenumber}</a>
          </li>
        </ul>
        <h2>Hébergement</h2>
        <address className="mb-4">
          Vercel Inc. <br />
          340 S Lemon Ave #4133 Walnut, <br />
          CA 91789, <br />
          États-unis
        </address>
        <h2>Crédits</h2>

        <h3>Contenu du site</h3>

        <h4>Conception</h4>
        <p><a href="https://pasquiou.fr" >Richard Pasquiou</a>.#NextJS, #Sanity</p>
        <h4>Images</h4>
        <p>
          Les images illustrant ce site sont libres de droits, sous licence
          Unsplash.{' '}
        </p>
        <ul>
          <li>
            Logo Homecano, par <cite>Anne-Carole Reynaud</cite>
          </li>

          <li>
            Femme prenant une pause (accueil), photo par
            <a href="https://unsplash.com/@daiga_ellaby?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Daiga Ellaby
            </a>
            sur
            <a href="https://unsplash.com/s/photos/home-coffee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </li>
        </ul>
        <h3 className="mb-2">Protection des données</h3>
        <ul className="list-disc m-4">
          <li>
            Les informations collectées par le biais de nos formulaires sont
            exclusivement communiquées à la société {name} et ne sont
            communiquées à aucun tiers.
          </li>
        </ul>
      </Section>
    </>
  );
}
