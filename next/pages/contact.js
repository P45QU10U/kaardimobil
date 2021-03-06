import { useInterventionContext } from '../context/InterventionContext';

export default function Contact() {
  const { intervention } = useInterventionContext();
  const displayAddress = intervention.address?.properties?.label;

  return <div>Votre lieu d'intervention : {displayAddress}</div>;
}
