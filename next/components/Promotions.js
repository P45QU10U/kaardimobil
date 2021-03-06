import { useAppContext } from '../pages/_app';
import { Section } from './designSystem/layout';

export default function Promotions() {
  const { offers } = useAppContext();
  const {
    description,
    name,
    promocode,
    startduration,
    endduration,
  } = offers[0];

  return (
    <Section className="w-4/5 md:w-1/3 bg-orange-400 shadow-2xl rounded-lg mb-4">
      <div className="p-2   ">
        {/* <div className="absolute rounded-full h-full w-3 bg-blue-500" /> */}
        <h2 className="text-2xl mb-2 text-gray-900 font-mono">{name}</h2>
        <p className="text-lg text-gray-700">{description}</p>
        <p>
          Code promo : <mark className="ml-2 font-bold ">{promocode}</mark>
        </p>
      </div>
    </Section>
  );
}
