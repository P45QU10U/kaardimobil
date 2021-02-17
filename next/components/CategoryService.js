export default function Categoryservice({ services, category }) {
  /* 
  
  Structure services
  On a 
  
  */

  return (
    <div className="mb-4 p-4 bg-orange-300">
      <h2>{category}</h2>
      {services.map((d, i) => (
        <div key={i}>
          <h3>{d.name}</h3>
          {d?.description && <p>{d.description}</p>}
          <ul>
            <li key={i}>
              {d.defaultProductVariant.title} {d.defaultProductVariant.price}€
            </li>
            {d?.variants?.map((v, index) => (
              <li key={`var${index}`}>
                {v.title} {v.price}€
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
