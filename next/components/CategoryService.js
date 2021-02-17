export default function CategoryService({ services, children }) {
  /* 
  
  Structure services
  On a 
  
  */

  return (
    <div className="mb-4 p-4 bg-orange-300">
      <h2>{children}</h2>
      {services.map((d) => (
        <div>
          <h3>{d.name}</h3>
          {d?.description && <p>{d.description}</p>}
          <ul>
            <li>
              {d.defaultProductVariant.title} {d.defaultProductVariant.price}€
            </li>
            {d?.variants?.map((v) => (
              <li>
                {v.title} {v.price}€
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
