import { point } from '@turf/helpers';
import distance from '@turf/distance';

import { useEffect, useRef, useState } from 'react';
import Confetti from 'react-confetti';
import Link from 'next/link';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { useInterventionContext } from '../context/InterventionContext';
import { useAppContext } from '../pages/_app';
import { ContactLink } from './Links';

function AdvertDistance() {
  const [coords, setCoords] = useState(undefined);
  const [animation, setAnimation] = useState(true);
  const alertRef = useRef();

  useEffect(() => {
    setCoords({
      x: alertRef.current
        ? alertRef.current.offsetLeft + alertRef.current.offsetWidth / 2
        : 0,
      y: alertRef.current ? alertRef.current.offsetTop : 0,
      w: 20,
      h: 10,
    });
  });

  function onClick(ev) {
    setCoords({
      x: ev.clientX,
      y: ev.clientY,
      w: 20,
      h: 10,
    });
    setAnimation(true);
  }
  function onComplete() {
    setAnimation(false);
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

  const [whatprice] = possibleDistances.filter(
    (a) => a[0] > distanceUserToCenter
  );

  if (whatprice) {
    const affichDist = Math.round(distanceUserToCenter);

    return intervention.adress !== null ? (
      <div role="alert" ref={alertRef}>
        {distanceUserToCenter > whatprice[0] ? (
          <span>
            <span role="img" aria-label="Personne déçue">
              🙍
            </span>
            Quel dommage, nous sommes un peu trop éloignés. ({affichDist}kms)
          </span>
        ) : (
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
              <p>Frais de déplacement applicables {whatprice[1]}€</p>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <ContactLink>Prendre rendez-vous</ContactLink>
              </div>
              {animation ? (
                <Confetti
                  colors={[
                    '#ef7d00',
                    '#ee7f00',
                    '#a3a3a3',
                    '#dadada',
                    '#5f5f5f',
                  ]}
                  numberOfPieces={128}
                  confettiSource={coords}
                  recycle={false}
                  onConfettiComplete={onComplete}
                />
              ) : null}
            </div>
          </>
        )}
      </div>
    ) : null;
  }
  return (
    <div>
      <span role="img" aria-label="Personne déçue">
        🙍
      </span>{' '}
      Quel dommage, nous sommes trop loin l'un de l'autre
    </div>
  );
}

export { AdvertDistance };
