import { createContext, useContext, useState } from 'react';

const InterventionContext = createContext();

export function InterventionWrapper({ children }) {
  const [intervention, setIntervention] = useState({
    address: null,
    cost: 0,
  });
  function updateAddress(address) {
    setIntervention({ ...intervention, address });
  }
  return (
    <InterventionContext.Provider value={{ intervention, updateAddress }}>
      {children}
    </InterventionContext.Provider>
  );
}

export function useInterventionContext() {
  return useContext(InterventionContext);
}
