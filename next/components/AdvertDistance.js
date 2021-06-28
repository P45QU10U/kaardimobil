import { JoshButtonLink } from './designSystem/Links';

function AdvertDistance({
  interventiondetails,
  possibleIntervention,
  interventionDistance,
  setStatusAnimation,
}) {
  // Ici, on veut afficher la possibilité ou pas de desservir.
  // Au premier affichage (count = 1), lancer l'animation. Sinon, seulement si click du bouton
  // Si changement adresse

  function onClick(ev) {
    setStatusAnimation(true);
  }

  const { price, distance } = interventiondetails;

  return price ? (
    <>
      <div className="mb-4">
        <p className="text-xl">
          <button type="button" onClick={onClick}>
            <span role="img" aria-label="étincelles">
              ✨
            </span>
            Merveilleux.
          </button>{' '}
          Nous ne sommes qu'à {distance}km l'un de l'autre.
        </p>
        <p>Frais de déplacement applicables&nbsp;: {price[1]}€</p>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <JoshButtonLink href="/contact">Prendre rendez-vous</JoshButtonLink>
        </div>
      </div>
    </>
  ) : (
    <div className="text-xl mb-4">
      <span role="img" aria-label="Personne déçue">
        🙍
      </span>{' '}
      Nous sommes à {distance}km l'un de l'autre ; veuillez nous contacter pour
      savoir si un déplacement est possible.
    </div>
  );
}

export { AdvertDistance };
