import Img from 'next/image';

import { Section } from './designSystem/layout';

export default function Coords(params) {
  return (
    <>
      <Section className="md:mt-8 relative">
        <figure className="grid grid-cols-1 md:grid-cols-3 bg-white rounded-xl shadow-lg">
          <div className="mx-auto h-48 w-48 md:h-auto md:w-auto col-span-1 p-8 m-4 overflow-hidden md:p-0 md:m-0 md:rounded-none md:rounded-l-xl relative">
            <Img
              src="/images/seb.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-full md:rounded-none md:rounded-l-xl"
              // width="500"
              // height="700"
            />
          </div>

          <div className="p-6 md:col-span-2 flex flex-col justify-around md:p-8 md:h-64 text-center md:text-left space-y-4 rounded-b-xl">
            <blockquote>
              <p className="text-lg font-semibold">
                “Plus de 10 années d'expérience chez Renault m'amènent à vous
                proposer 95% de l'entretien d'un véhicule… où vous le
                souhaitez.”
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-cyan-600">Sébastien Le Quellec</div>
              <div className="text-gray-500">Technicien automobile</div>
            </figcaption>
          </div>
        </figure>
      </Section>
    </>
  );
}
