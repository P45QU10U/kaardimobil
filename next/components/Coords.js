import Img from 'next/image';

import { Section } from './designSystem/layout';

export default function Coords(params) {
  return (
    <>
      <Section className="md:mt-8 relative">
        <figure className="grid grid-cols-1 md:grid-cols-3 border border-gray-200 rounded-xl shadow-lg">
          <div className="mx-auto h-48 w-48 md:h-auto md:w-auto col-span-1 p-8 m-4 overflow-hidden md:p-0 md:m-0 md:rounded-none md:rounded-l-xl relative">
            <Img
              src="/images/seb.jpg"
              alt=""
              width="300"
              height="300"
              layout="responsive"
              objectFit="cover"
              className="rounded-full md:rounded-none md:rounded-l-xl"
            />
          </div>

          <div className="p-6 md:col-span-2 flex flex-col justify-around md:p-8 md:h-64 text-center md:text-left space-y-4 rounded-b-xl">
            <blockquote>
              <p className="text-2xl font-semibold">
                “Plus de 10 ans d'expérience dans la réparation automobile
                m'amène a vous proposer plus de 90% des prestations réalisables
                dans un garage classique.”
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-lg text-orange-800">
                Sébastien Le Quellec
              </div>
              <div className="text-lg text-gray-500">Technicien automobile</div>
            </figcaption>
          </div>
        </figure>
      </Section>
    </>
  );
}
