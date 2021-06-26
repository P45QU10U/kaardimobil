import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
// import Tooltip from '@reach/tooltip'
import { FaSearch, FaInfo, FaTimes } from 'react-icons/fa';
import { useCombobox } from 'downshift';
import debounceFn from 'debounce-fn';
import Confetti from 'react-confetti';
import { point } from '@turf/helpers';
import distance from '@turf/distance';
import useAsync from '../hooks/useasync';
import { FullPageSpinner } from './lib';
import { AddressRow } from './addressRow';
import { AdvertDistance } from './AdvertDistance';
import { client } from '../utils/api-fetch-external';
import { useInterventionContext } from '../context/InterventionContext';
import { useAppContext } from '../pages/_app';

function apiAdresseGouvFr(query, center) {
  return `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(
    query
  )}&lat=${encodeURIComponent(center.lat)}&lon=${encodeURIComponent(
    center.lng
  )}'
  }`;
}

// Hook
function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );

  return debouncedValue;
}

function giveMeAPrice(interPlace, distancesRenseignees, geocoords) {
  const possibleDistances = distancesRenseignees
    .map((e) => [e.distance, e.price])
    .sort((a, b) => {
      if (a[0] < b[0]) {
        return -1;
      }
      return 1;
    });

  const [lngUsr, latUser] = interPlace?.address
    ? interPlace?.address?.geometry?.coordinates
    : [0, 0];

  const from = point([geocoords.lat, geocoords.lng]);
  const to = point([latUser, lngUsr]);
  const options = { units: 'kilometers' };
  const distanceUserToCenter = to ? distance(from, to, options) : '';
  const affichDist = Math.round(distanceUserToCenter);

  const [whatprice] = possibleDistances.filter(
    (a) => a[0] > distanceUserToCenter
  );

  const detailsToDisplay = {
    price: whatprice,
    distance: affichDist,
  };

  if (whatprice) {
    return detailsToDisplay;
  }
  return false;
}

function InterventionPlaceScreen({ center, distanceMax }) {
  const { intervention, updateAddress } = useInterventionContext();
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const { interventiondistance, geocoords } = useAppContext();
  const [statusAnimation, setStatusAnimation] = useState(false);
  const [coords, setScreenCoords] = useState(undefined);
  const debouncedSearchTerm = useDebounce(debouncedQuery, 500);
  const [infoAddress, setInfoAddress] = useState(false);

  const alertRef = useRef();

  const {
    data,
    setData,
    error,
    isLoading,
    isError,
    isSuccess,
    run,
  } = useAsync({ data: [] });

  const isItPossible = useMemo(
    () => giveMeAPrice(intervention, interventiondistance, geocoords),
    [intervention, interventiondistance, geocoords]
  );

  // Debounce appel api adresse Gouv.fr
  useEffect(() => {
    if (debouncedSearchTerm) {
      run(
        client(apiAdresseGouvFr(debouncedQuery, center)).then(
          (dataa) => dataa.features
        )
      );
    }
  }, [debouncedSearchTerm, run, client, center]);

  useEffect(() => {
    if (isItPossible) {
      setStatusAnimation(true);
      setScreenCoords({
        x: alertRef.current
          ? alertRef.current.offsetLeft + alertRef.current.offsetWidth / 2
          : 0,
        y: alertRef.current ? alertRef.current.offsetTop : 0,
        w: 20,
        h: 10,
      });
    }
  }, [alertRef, isItPossible]);

  function onComplete() {
    setStatusAnimation(false);
  }

  const dataToWorkWith = data?.features?.length === 0 ? [] : data;

  const {
    isOpen,
    selectedItem,
    items,
    onSelectedItemChange,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    reset,
  } = useCombobox({
    id: 'searchList',
    items: dataToWorkWith,
    itemToString: (item) => (item ? item.properties.label : ''),
    // stateReducer,
    onInputValueChange: ({ inputValue, type, selectedItem }) => {
      // Si ce n'est pas un reset
      // Si on ne vient pas de taper entrée et qu'on a un item
      if (
        type !== '__function_reset__' ||
        (type !== '__input_keydown_enter__' && selectedItem !== null)
      ) {
        setDebouncedQuery(inputValue);
      }
    },
    onSelectedItemChange: ({ selectedItem }) => {
      updateAddress(selectedItem);
    },
    // onStateChange: (e) => console.log('stateChange', e)
  });

  return (
    <div {...getComboboxProps()} className="grid grid-cols-1">
      {statusAnimation ? (
        <Confetti
          colors={['#ef7d00', '#ee7f00', '#a3a3a3', '#dadada', '#5f5f5f']}
          numberOfPieces={128}
          confettiSource={coords}
          recycle={false}
          onConfettiComplete={onComplete}
        />
      ) : null}
      <label htmlFor="address" className="mb-2">
        <span className="font-mono text-sm">
          Renseignez votre adresse postale
        </span>
        <div ref={alertRef} className="flex mt-1">
          <input
            className="flex-1 inline-block h-12 border-orange-600 border-2 focus:ring-2 ring-orange-700 p-2"
            {...getInputProps({ id: 'address' })}
            placeholder="rue de la pompe…"
          />
          <button
            className="w-12 grid place-items-center border-orange-600 border-2 focus:ring-2 ring-orange-700 hover:bg-orange-400"
            type="button"
            onClick={() => {
              setDebouncedQuery('');
              setData([]);
              updateAddress(null);
              reset();
            }}
            aria-label="effacer l'addresse"
          >
            <FaTimes className="w-5" />
          </button>
        </div>
      </label>
      <div />
      <div className="flex items-stretch min-h-full">
        <button
          className="w-8 h-8 flex m-2 p-2 cursor-help bg-orange-600 text-lg text-black rounded-full"
          type="button"
          aria-label="Information sur adresse renseignée"
          onClick={() => setInfoAddress(!infoAddress)}
        >
          <FaInfo />{' '}
        </button>
        {infoAddress ? (
          <p className="font-serif text-sm ml-2">
            Cette adresse n'est pas enregistrée. Renseigner celle-ci vous permet
            de savoir si je peux vous fournir des prestations (dans le rayon
            convenu), et de calculer d'éventuels frais de déplacement.
          </p>
        ) : (
          ''
        )}
      </div>

      <ul
        {...getMenuProps()}
        className="leading-10 divide-y-2 divide-dotted divide-orange-700"
      >
        {isLoading ? (
          <FullPageSpinner />
        ) : (
          isOpen &&
          dataToWorkWith.map((item, index) => (
            <li
              key={item.properties.id}
              {...getItemProps({ item, index })}
              style={
                highlightedIndex === index
                  ? { background: 'rgba(239, 125, 0, 0.3)', color: 'black' }
                  : {}
              }
            >
              <span>{item.properties.label}</span>
            </li>
          ))
        )}
      </ul>
      {/* Si on a une adresse, on affiche la notif si possible ou pas. */}
      {intervention?.address !== null ? (
        <AdvertDistance
          interventiondetails={isItPossible}
          setStatusAnimation={setStatusAnimation}
        />
      ) : (
        ''
      )}
    </div>
  );
}

export default InterventionPlaceScreen;
