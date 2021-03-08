const dataJSONLD = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  '@id': 'https://homecano.fr',
  name: "Ho'Mecano",
  logo: '',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '14 la Chenairie',
    addressLocality: 'Pleugueneuc',
    postalCode: '35730',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 49,
    longitude: 1,
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 49,
      longitude: 1,
    },
    geoRadius: 45000,
  },
  url: 'https://homecano.fr/contact',
  telephone: '+33734738272',
  priceRange: '$',
  paymentAccepted: 'carte bancaire, chèque, espèces, virement bancaire',
  currenciesAccepted: 'EUR',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday'],
      opens: '11:30',
      closes: '22:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Wednesday', 'Thursday', 'Friday'],
      opens: '11:30',
      closes: '23:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '16:00',
      closes: '23:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '16:00',
      closes: '22:00',
    },
  ],
};

export function generateJsonLD(params) {
  // Think of an image please
  const { name, address, openinghours, geocoords, phonenumber } = params;

  // On a plusieurs variables. On les découpe pour créer notre JSON
  //

  function OpeningHours() {}

  return (
    <script className="structured-data-list" type="application/ld+json">
      {JSON.stringify(dataJSONLD)}
    </script>
  );
}
