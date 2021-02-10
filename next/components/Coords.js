import Img from 'next/image';
import { Section } from './designSystem/layout';

export default function Coords(params) {
  return (
    <Section className="relative grid md:mt-8">
      <figure className="md:flex bg-white rounded-xl p-8 md:p-0 shadow-lg relative">
        <img
          className="w-32 h-32 md:w-48 md:h-auto md:rounded-none md:rounded-l-xl rounded-full mx-auto"
          src="/images/seb.jpg"
          alt=""
          layout="intrinsic"
          width="300"
          height="300"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-semibold">
              “Plus de 10 années d'expérience chez Renault m'amènent à vous
              proposer 95% de l'entretien d'un véhicule… où vous le souhaitez.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-cyan-600">Sébastien Le Quellec</div>
            <div className="text-gray-500">Technicien automobile</div>
          </figcaption>
        </div>
      </figure>
    </Section>
  );
}
