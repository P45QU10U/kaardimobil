import PropTypes from 'prop-types';
import { PortableText } from '../lib/sanity';

export default function Categoryservice({ services, category }) {
  return (
    <div className="mb-12 space-y-2">
      <h3 className="border-orange-500 border-l-8 inline-flex p-4 mb-4">
        {category}
      </h3>
      {services.map((d, i) => (
        <div key={i} className="border-orange-700 border-b-2">
          <div className="grid items-start grid-cols-1 md:grid-cols-2">
            <div className="">
              <h4 className="text-orange-700">{d.name}</h4>
              {d?.description ? (
                <details>
                  <summary>plus d'infos</summary>
                  <PortableText blocks={d.description} />
                </details>
              ) : null}
            </div>
            <ul className="divide-y-2 divide-dotted divide-orange-700 border-b border-dotted border-orange-700">
              <li key={i} className="flex justify-between">
                <span>{d.defaultProductVariant.title}</span>{' '}
                <span>{d.defaultProductVariant.price}</span>
              </li>
              {d?.variants?.map((v, index) => (
                <li key={`var${index}`} className="flex justify-between">
                  <span>{v.title}</span> <span>{v.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

Categoryservice.propTypes = {
  services: PropTypes.array,
  category: PropTypes.string,
};
