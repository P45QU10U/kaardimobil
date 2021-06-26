import Coords from '../components/Coords';
import { Section } from '../components/designSystem/layout';
import { useAppContext } from './_app';

export default function Apropos() {
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
      <Coords />
      <Section className="m-8 p-4">
        <div className="border-4 border-orange-700 p-4 md:p-8 lg:p-12">
          <h2 className="text-transparent bg-gradient-to-t bg-clip-text from-orange-900 to-orange-700">
            Votre mécanicien en quelques mots
          </h2>
          <p className="text-lg">
            Fort de plus de 10 années d'expérience, avec deux diplômes d'état
            obtenus avec mention me permet de vous proposer des prestations de
            qualité à des prix abordables.
          </p>
          <p className="text-lg">
            Je me déplace dans une zone de {distancemax} kilomètres autour de{' '}
            {address.city} ce qui me permet d'aller de Rennes à Saint Malo. J'ai
            tout le matériel nécessaire pour intervenir sur vos véhicules pour
            tout type d'intervention sur votre lieu de travail, chez vous ou
            tout autre emplacement privé.
          </p>
          <p className="text-lg">
            Vous n'avez pas à vous déplacer, vous pouvez profiter de votre chez
            vous pendant que j'interviens sur votre véhicule.
          </p>
        </div>
      </Section>
    </>
  );
}
