import { point } from '@turf/helpers';
import distance from '@turf/distance';

import { useEffect, useRef, useState } from 'react';
import Confetti from 'react-confetti';
import { useInterventionContext } from '../context/InterventionContext';
import { useAppContext } from '../pages/_app';
import { ContactLink } from './designSystem/Links';

function AdvertDistance({ position }) {
  // Ici, on veut afficher la possibilité ou pas de desservir.
  // Au premier affichage (count = 1), lancer l'animation. Sinon, seulement si click du bouton
  // Si changement adresse

  // Voir si on peut pas passer les coords de la div dans AdvertDistance

  const [coords, setScreenCoords] = useState(undefined);
  const [statusAnimation, setStatusAnimation] = useState(true);
  const alertRef = useRef();

  useEffect(() => {
    setScreenCoords({
      x: alertRef.current
        ? alertRef.current.offsetLeft + alertRef.current.offsetWidth / 2
        : 0,
      y: alertRef.current ? alertRef.current.offsetTop : 0,
      w: 20,
      h: 10,
    });
  }, [alertRef, setScreenCoords]);

  function onClick(ev) {
    setScreenCoords({
      x: ev.clientX,
      y: ev.clientY,
      w: 20,
      h: 10,
    });
    setStatusAnimation(true);
  }

  function onComplete() {
    setStatusAnimation(false);
  }

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

  const from = point([geocoords.lat, geocoords.lng]);
  const to = point([latUser, lngUsr]);
  const options = { units: 'kilometers' };
  const distanceUserToCenter = to ? distance(from, to, options) : '';
  const affichDist = Math.round(distanceUserToCenter);

  const [whatprice] = possibleDistances.filter(
    (a) => a[0] > distanceUserToCenter
  );

  return whatprice ? (
    <>
      <div>
        <p className="text-xl">
          <button type="button" onClick={onClick}>
            <span role="img" aria-label="étincelles">
              ✨
            </span>
            Merveilleux.
          </button>{' '}
          Nous ne sommes qu'à {affichDist}km l'un de l'autre.
        </p>
        <p>Frais de déplacement applicables&nbsp;: {whatprice[1]}€</p>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <ContactLink>Prendre rendez-vous</ContactLink>
        </div>
        {statusAnimation ? (
          <Confetti
            colors={['#ef7d00', '#ee7f00', '#a3a3a3', '#dadada', '#5f5f5f']}
            numberOfPieces={128}
            confettiSource={coords}
            recycle={false}
            onConfettiComplete={onComplete}
          />
        ) : null}
      </div>
    </>
  ) : (
    <div className="text-xl">
      <span role="img" aria-label="Personne déçue">
        🙍
      </span>{' '}
      Nous sommes à {affichDist}km l'un de l'autre ; veuillez nous contacter
      pour savoir si un déplacement est possible.
    </div>
  );
}

export { AdvertDistance };
