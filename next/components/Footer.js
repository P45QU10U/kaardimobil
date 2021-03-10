import Link from 'next/link';
import { SiFacebook } from 'react-icons/si';
import { useAppContext } from '../pages/_app';
import { Container, Section } from './designSystem/layout';
import { menu } from './menu/Menu';
import Openinghours from './Openinghours';

export default function Footer() {
  const params = useAppContext();
  const { name, address, openinghours, phonenumber } = params;

  return (
    <Container className="bg-gray-50 bg-opacity-80">
      <Section className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 lg:grid-cols-2 p-4 gap-4">
        <div className="mb-4 md:border-r-2 border-gray-300">
          <h4 className="text-orange-800">Coordonnées</h4>
          <p>
            {name}
            <br />
            {[address.streetNo, address.street].join(' ')}
            <br />
            {[address.postalcode, address.city].join(' ')}
          </p>
          <abbr title="Numéro de téléphone">Tél. :</abbr>{' '}
          <a href={`tel:+33${phonenumber.slice(1)}`}>
            {phonenumber.split(/(?=(?:..)*$)/).join(' ')}
          </a>
        </div>
        <div className="mb-4 md:border-r-2 border-gray-300">
          <h4 className="text-orange-800">Horaires</h4>
          <Openinghours opendays={openinghours} />
        </div>
        <div id="footermap" className="mb-4">
          <h4 className="text-orange-800">Plan du site</h4>
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
          <h4 className="text-orange-800">Suivez-moi</h4>

          <ul>
            <li>
              <a href="https://www.facebook.com/homecano" className="flex">
                <SiFacebook
                  size="24"
                  title="Facebook"
                  className="text-orange-700"
                />
                <span className="ml-2">Ho'Mecano</span>
              </a>
            </li>
          </ul>
        </div>
      </Section>
    </Container>
  );
}
