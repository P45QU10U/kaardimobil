import { groq } from 'next-sanity';
import Link from 'next/link';
import Img from 'next/image';
import { FaArrowCircleRight } from 'react-icons/fa';
import { IoMdPricetag } from 'react-icons/io';
import Servicedetails from '../components/Servicedetails';
import { Section } from '../components/designSystem/layout';
import { getClient, usePreviewSubscription } from '../lib/sanity';

/* 
*[_type == 'services']{
  ...,
  'subcategory': category->
}
*/

const postQuery = groq`*[_type == 'services']{
  name,
  description,
  defaultProductVariant{price, title},
  variants,
  'category': category->name
} | order(category asc)`;

export default function Prestations({ data, preview }) {
  const { data: services } = usePreviewSubscription(postQuery, {
    initialData: data,
    enabled: preview,
  });

  const categories = new Set(services.map((e) => e.category));

  return (
    <Section>
      <h2 className="text-6xl font-extrabold text-transparent bg-gradient-to-t bg-clip-text from-orange-700 to-orange-500">
        Tarifs{' '}
        <IoMdPricetag
          className="text-orange-600 inline-block"
          title="étiquette"
        />
      </h2>
      {Array.from(categories, (e, index) => (
        <Servicedetails
          key={`gt${index}`}
          services={data.filter((s) => s.category === e)}
          category={e}
        />
      ))}

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <p />
          <Link href="/contact">
            <a className="text-xl text-orange-500 no-underline inline-block mb-12 border-orange-500 hover:border-orange-700 hover:text-orange-700 hover:shadow-sm border-2 p-3 rounded-lg">
              Faire un devis <FaArrowCircleRight className="inline ml-2" />
            </a>
          </Link>
        </div>
        <div className="grid grid-cols-2 items-center">
          <p className="text-xl p-4 font-serif bg-yellow-300 rounded-lg">
            C'est moins cher qu'en concession, et tout aussi bien fait.
          </p>
          <Img
            layout="intrinsic"
            width="250"
            height="250"
            alt="goutte d'huile"
            src="/images/oil_droplet.svg"
          />
        </div>
      </div>
    </Section>
  );
}

export async function getStaticProps({ preview = false }) {
  const services = await getClient(preview).fetch(postQuery);

  return {
    props: {
      preview,
      data: services,
    },
  };
}
