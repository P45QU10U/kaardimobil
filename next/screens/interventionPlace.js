import { useState, useEffect, useMemo, useCallback } from 'react';
// import Tooltip from '@reach/tooltip'
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useCombobox } from 'downshift';
import debounceFn from 'debounce-fn';

import useAsync from '../hooks/useasync';
import { FullPageSpinner } from '../components/lib';
import { AddressRow } from '../components/addressRow';
import { AdvertDistance } from '../components/AdvertDistance';
import { client } from '../utils/api-fetch-external';

function InterventionPlaceScreen({ center, distanceMax }) {
  const [userPosition, setUserPosition] = useState(null);
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const {
    data,
    setData,
    error,
    isLoading,
    isError,
    isSuccess,
    run,
  } = useAsync({ data: [] });

  function apiAdresseGouvFr(query) {
    return `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(
      query
    )}&lat=${encodeURIComponent(center.lat)}&lon=${encodeURIComponent(
      center.lng
    )}'
    }`;
  }

  // On peut faire un hook enregistrant dans le contexte l'adresse saisie

  const debounce = useCallback(
    debounceFn(
      (_searchVal) => {
        // send the server request here
        run(
          client(apiAdresseGouvFr(_searchVal)).then((dataa) => dataa.features)
        );
      },
      { wait: 500 }
    ),
    [run, client, apiAdresseGouvFr]
  );

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
        if (debouncedQuery.length > 3) {
          debounce(debouncedQuery);
        }
      }
    },
    onSelectedItemChange: ({ selectedItem }) => {
      setUserPosition(selectedItem?.geometry?.coordinates);
    },
    // onStateChange: (e) => console.log('stateChange', e)
  });

  return (
    <>
      <h2>Veuillez renseigner votre adresse</h2>
      <div {...getComboboxProps()}>
        <label htmlFor="address">Adresse</label>{' '}
        <input
          id="address"
          {...getInputProps()}
          placeholder="rue de la mare…"
        />
        <button
          type="button"
          onClick={() => {
            setDebouncedQuery('');
            setData([]);
            setUserPosition(null);
            reset();
          }}
          aria-label="effacer l'addresse"
        >
          <FaTimes />
        </button>
      </div>
      {isLoading ? (
        <FullPageSpinner />
      ) : (
        <ul {...getMenuProps()}>
          {isOpen &&
            dataToWorkWith.map((item, index) => (
              <span key={item.properties.id} {...getItemProps({ item, index })}>
                <li
                  style={
                    highlightedIndex === index ? { background: '#ede' } : {}
                  }
                >
                  <h4>{item.properties.label}</h4>
                </li>
              </span>
            ))}
        </ul>
      )}
      {selectedItem !== null ? (
        <AdvertDistance
          center={center}
          distanceMax={distanceMax}
          userPosition={userPosition}
        />
      ) : (
        ''
      )}
    </>
  );
}

export default InterventionPlaceScreen;
