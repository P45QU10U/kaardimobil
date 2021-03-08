import { point } from '@turf/helpers';
import distance from '@turf/distance';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import { useInterventionContext } from '../context/InterventionContext';
import { useAppContext } from '../pages/_app';

function AdvertDistance() {
  // console.log('userposition', userPosition?.geometry?.coordinates);

  const { interventiondistance, geocoords } = useAppContext();
  const { intervention } = useInterventionContext();

  const possibleDistances = interventiondistance
    .map((e) => [e.distance, e.price])
    .sort((a, b) => {
      if (a[0] < b[0]) {
        return -1;
      }
      return 1;
    });

  const [lngUsr, latUser] = intervention?.address
    ? intervention?.address?.geometry?.coordinates
    : [0, 0];

  console.log('coordonnees', lngUsr, latUser);

  const from = point([geocoords.lat, geocoords.lng]);
  const to = point([latUser, lngUsr]);
  const options = { units: 'kilometers' };
  console.log('advertdistanceintervention', intervention, distance);
  const distanceUserToCenter = to ? distance(from, to, options) : '';

  const [whatprice] = possibleDistances.filter(
    (a) => a[0] > distanceUserToCenter
  );
  console.log('what', whatprice);

  const { width, height } = useWindowSize();

  if (whatprice) {
    const affichDist = Math.round(distanceUserToCenter);

    return intervention.adress !== null ? (
      <div role="alert">
        {distanceUserToCenter > whatprice[0] ? (
          <span>
            Quel dommage, nous sommes un peu trop éloignés. ({affichDist}kms)
          </span>
        ) : (
          <div>
            <Confetti
              colors={['#ef7d00', '#ee7f00', '#a3a3a3', '#dadada', '#5f5f5f']}
              numberOfPieces={128}
              height={height}
              width={width}
              recycle={false}
            />
            <span>
              Merveilleux. Nous ne sommes qu'à {affichDist}km l'un de l'autre.
              Frais de déplacement applicables {whatprice[1]}€
            </span>
          </div>
        )}
      </div>
    ) : null;
  }
  return <div>Quel dommage, nous sommes trop loin l'un de l'autre</div>;
}

export { AdvertDistance };
