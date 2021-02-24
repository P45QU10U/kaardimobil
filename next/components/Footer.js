import Link from 'next/link';
import { useContext } from 'react';
import { SiTwitter } from 'react-icons/si';
import { Container, Section } from './designSystem/layout';
import { menu } from './menu/Menu';
import { ParamStore } from '../pages/_app';
import Openinghours from './Openinghours';

export default function Footer() {
  const params = useContext(ParamStore);
  const { address } = params;

  return (
    <Container className="bg-gray-50 bg-opacity-80">
      <Section className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 lg:grid-cols-2 p-4 gap-4">
        <div className="mb-4 md:border-r-2 border-gray-300">
          <h4>Coordonnées</h4>
          <p>
            {params.name}
            <br />
            {[address.streetNo, address.street].join(' ')}
            <br />
            {[address.postalcode, address.city].join(' ')}
          </p>
          <abbr title="Numéro de téléphone">Tél. :</abbr>{' '}
          <a href={`tel:+33${params.phonenumber.slice(1)}`}>
            {params.phonenumber.split(/(?=(?:..)*$)/).join(' ')}
          </a>
        </div>
        <div className="mb-4 md:border-r-2 border-gray-300">
          <h4>Horaires</h4>
          <Openinghours opendays={params.openinghours} />
        </div>
        <div id="footermap" className="mb-4">
          <h4>Plan du site</h4>
          <ul>
            {menu.map((entr, index) => (
              <li key={`menu-${index}`}>
                <Link href={entr.slug}>{entr.title}</Link>
              </li>
            ))}
            <li>
              <Link href="/mentions-legales">Mentions légales</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Suivez-moi</h4>

          <ul>
            <li>
              <a href="https://twitter.com/P45QU10U" className="flex">
                <SiTwitter size="24" title="Twitter" />
                <span className="ml-2">@P45QU10U</span>
              </a>
            </li>
          </ul>
        </div>
      </Section>
    </Container>
  );
}
