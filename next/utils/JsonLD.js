

export function generateJsonLD(params) {
  // Think of an image please
  const { name, address, openinghours, geocoords, phonenumber, interventiondistance } = params;

  const possibleDistances = interventiondistance
    .map((e) => [e.distance, e.price])
    .sort((a, b) => {
      if (a[0] < b[0]) {
        return -1;
      }
      return 1;
    });

  const [distancemax] = possibleDistances[possibleDistances.length - 1];
  

  const dataJSONLD = {
    "@context": 'https://schema.org',
    "@type": 'AutoRepair',
    "@id": 'https://www.homecano.fr',
    "name": `${name}`,
    "image": 'https://www.homecano.fr/_next/image?url=%2Fimages%2Fhomecano.png&w=384&q=75',
    "address": {
      "@type": 'PostalAddress',
      "streetAddress": `${[address.streetNo, address.street].join(' ')}`,
      "addressLocality": `${address.city}`,
      "postalCode": `${address.postalCode}`,
      "addressCountry": 'FR'
    },
    "geo": {
      "@type": 'GeoCoordinates',
      "latitude": geocoords.lat,
      "longitude": geocoords.lng
    },
    "areaServed": {
      "@type": 'GeoCircle',
      "geoMidpoint": {
        "@type": 'GeoCoordinates',
        "latitude": geocoords.lat,
        "longitude": geocoords.lng
      },
      "geoRadius": distancemax * 1000
    },
    "url": 'https://www.homecano.fr/',
    "telephone": `+33${phonenumber.slice(1)}`,
    "priceRange": '$',
    "paymentAccepted": 'carte bancaire, chèque, espèces, virement bancaire',
    "currenciesAccepted": 'EUR',
    "openingHoursSpecification": OpeningHours(openinghours)
  };
  

  /* Renvoie un tableau avec pour structure :
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: 'Monday',
    opens: '11:30',
    closes: '22:00',
  }, 
      */
  function OpeningHours(days = []) {

    let openhour = Object.entries(days)

    let hourstab = openhour
      .filter(([day, ]) => day !== '_type')
      .reduce((prev, [day, horaires], i) =>  {
        let prepa = []
        for (const horai of horaires) {
          const jour = {
            '@type': 'OpeningHoursSpecification', 
            'dayOfWeek': day,
            'opens': horai.opens,
            'closes': horai.closes
          }
          prepa = [...prepa, jour]
        }

        return [...prev, ...prepa]
      }, []) 

      return hourstab
  }

  return dataJSONLD
}
