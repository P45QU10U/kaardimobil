import { useAppContext } from '../pages/_app';
import { Section } from './designSystem/layout';

export default function Promotions() {
  const { promotions } = useAppContext();
  const {
    description,
    name,
    promocode,
    startduration,
    endduration,
  } = promotions[0];

  return (
    <Section className="relative md:w-1/3 folded-corner">
      <div className="foldedcorner p-2 text-gray-700">
        {/* <div className="absolute rounded-full h-full w-3 bg-blue-500" /> */}
        <h2 className="text-2xl mb-2  font-mono">{name}</h2>
        <p className="text-lg">{description}</p>
        <p>
          Code promo : <mark className="ml-2 font-bold ">{promocode}</mark>
        </p>
      </div>
    </Section>
  );
}
