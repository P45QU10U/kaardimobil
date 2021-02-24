// import { MdStore as icon } from 'react-icons/md';

export default {
  name: 'storeSettings',
  title: 'Paramètres',
  type: 'document',
  // icon,
  fields: [
    {
      name: 'name',
      title: 'Nom entreprise',
      type: 'string',
      description: 'Nom de l\'entreprise',
    },
    {
      name: 'address',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {name: 'streetNo', type: 'string', title: 'numéro'},
        {name: 'street', type: 'string', title: 'rue'},
        {name: 'postalcode', title: 'Code postal', type: 'string'},
        {name: 'city', type: 'string', title: 'ville'}
      ],
    
      title: 'Adresse de l\'entreprise',
    },
    {
      name: 'openinghours',
      title: 'Horaires d\'ouverture',
      type: 'weekdays',
    },
    {
      name: 'phonenumber',
      title: 'Numéro de téléphone',
      type: 'string',
      description: 'téléphone français sous la forme 0612345678'
    },
    {
      name: 'geocoords',
      title: 'Coordonnées GPS',
      type: 'geopoint',
    },
    {
      name: 'interventiondistance',
      title: 'Distance max intervention',
      type: 'number',
    },
    {
      name: 'socialnetworks',
      title: 'réseaux sociaux',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'socialnetwork' }] }],
    },
  ],
};
