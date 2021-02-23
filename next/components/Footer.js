import Link from 'next/link';
import { SiTwitter } from 'react-icons/si';
import { Container, Section } from './designSystem/layout';
import { menu } from './menu/Menu';

/* 
<script type="application/ld+json">
{{
  '@context': 'https://schema.org',
  '@type': ['TouristAttraction', 'AmusementPark'],
  name: 'Disneyland Paris',
  description:
    "It's an amusement park in Marne-la-Vallée, near Paris, in France and is the most visited theme park in all of France and Europe.",
  openingHours: [
    'Mo-Fr 10:00-19:00',
    'Sa 10:00-22:00',
    'Su 10:00-21:00',
  ],
  isAccessibleForFree: false,
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Credit Card',
  url: 'http://www.disneylandparis.it/',
}}
</script> 



*/

export default function Footer() {
  return (
    <Container className="bg-gray-50 bg-opacity-80">
      <Section className="grid grid-cols-1 grid-rows-2 md:grid-cols-3 p-4 gap-4">
        <div className="mb-4 md:border-r-2 border-gray-300">
          <h4>Coordonnées</h4>
          <p>
            Pasquiou Richard
            <br />
            1 impasse des érables
            <br />
            27350 Routot
          </p>
          <abbr title="Numéro de téléphone">Tél. :</abbr>{' '}
          <a href="tel:0676946381">06 76 94 63 81</a>
        </div>
        <div className="mb-4 md:border-r-2 border-gray-300">
          <h4>Horaires</h4>
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
