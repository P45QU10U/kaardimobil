import { useState, useEffect, useMemo, useCallback } from 'react';
// import Tooltip from '@reach/tooltip'
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useCombobox } from 'downshift';
import debounceFn from 'debounce-fn';

import useAsync from '../hooks/useasync';
import { FullPageSpinner } from './lib';
import { AddressRow } from './addressRow';
import { AdvertDistance } from './AdvertDistance';
import { client } from '../utils/api-fetch-external';
import { useInterventionContext } from '../context/InterventionContext';

function InterventionPlaceScreen({ center, distanceMax }) {
  const { intervention, updateAddress } = useInterventionContext();
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
      // setUserPosition(selectedItem);
      updateAddress(selectedItem);
    },
    // onStateChange: (e) => console.log('stateChange', e)
  });

  return (
    <div {...getComboboxProps()} className="grid grid-cols-1">
      <label htmlFor="address">Adresse, ville</label>{' '}
      <div className="flex">
        <input
          className="flex-1 inline-block h-12"
          id="address"
          {...getInputProps()}
          placeholder="rue de la mare…"
        />
        <button
          className="w-12 grid place-items-center"
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
      {intervention.address !== null ? <AdvertDistance /> : ''}
    </div>
  );
}

export default InterventionPlaceScreen;
