import PropTypes from 'prop-types';
import { PortableText } from '../lib/sanity';

export default function Categoryservice({ services, category }) {
  return (
    <div className="mb-4 space-y-2">
      <h3>{category}</h3>
      {services.map((d, i) => (
        <div key={i} className="border-orange-700 border-b-2">
          {d?.description ? (
            <details>
              <summary>plus d'infos</summary>
              <PortableText blocks={d.description} />
            </details>
          ) : null}
          <div className="grid items-start grid-cols-1 md:grid-cols-2">
            <div className="">
              <h4 className="text-orange-700">{d.name}</h4>
            </div>
            <ul className="divide-y-2 divide-dotted divide-orange-700">
              <li key={i}>
                {d.defaultProductVariant.title} {d.defaultProductVariant.price}
              </li>
              {d?.variants?.map((v, index) => (
                <li key={`var${index}`}>
                  {v.title} {v.price}
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
