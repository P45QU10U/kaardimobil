import { groq } from 'next-sanity';
import Link from 'next/link';
import { FaArrowCircleRight } from 'react-icons/fa';
import CategoryService from '../components/CategoryService';
import { Section } from '../components/designSystem/layout';
import { getClient, usePreviewSubscription } from '../lib/sanity';

const postQuery = groq`*[_type == 'services']{
  name,
  description,
  defaultProductVariant{price, title},
  variants,
  'category': category->name
} | order(category asc) `;
/* 
*[_type == 'services']{
  ...,
  'subcategory': category->
}
*/

export default function Prestations({ data, preview }) {
  const { data: services } = usePreviewSubscription(postQuery, {
    initialData: data,
    enabled: preview,
  });

  const categories = new Set(services.map((e) => e.category));

  return (
    <Section>
      {Array.from(categories, (e) => (
        <CategoryService services={services.filter((s) => s.category === e)}>
          {e}
        </CategoryService>
      ))}

      <p>C'est moins cher que votre garage, et tout aussi bien fait.</p>

      <Link href="/contact">
        <a className="text-xl text-orange-500 no-underline inline-block mb-12 border-orange-500 hover:border-orange-700 hover:text-orange-700 hover:shadow-sm border-2 p-3 rounded-lg">
          Faire un devis <FaArrowCircleRight className="inline ml-2" />
        </a>
      </Link>
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
