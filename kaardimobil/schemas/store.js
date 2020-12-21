// import { MdStore as icon } from 'react-icons/md';

export default {
  // computeur name
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
      title: 'Adresse de l\'entreprise',
      type: 'text',
    },
    {
      name: 'phonenumber',
      title: 'Numéro de téléphone',
      type: 'string',
    },
    {
      name: 'openinghours',
      title: 'Horaires d\'ouverture',
      type: 'string',
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
