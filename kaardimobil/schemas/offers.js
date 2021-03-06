// import { MdStore as icon } from 'react-icons/md';

export default {
  name: 'offers',
  title: 'Promotions',
  type: 'document',
  // icon,
  fields: [
    {
      name: 'name',
      title: 'Nom promotion',
      type: 'string',
      description: 'Descriptif promotion',
    },
    {
      name: 'description',
      title: 'Descriptif promotion',
      type: 'text',
      description: 'Descriptif promotion',
    },
    {
      name: 'image',
      title: 'image promotion',
      type: 'image',
    },
    {
      name: 'reduction',
      title: 'Montant réduction (en €)',
      type: 'number',
    },
    {
      name: 'onindex',
      title: 'Sur page accueil',
      type: 'boolean',
    },
    {
      name: 'startduration',
      title: 'Début de promotion',
      type: 'datetime',
    },
    {
      name: 'endduration',
      title: 'Fin de promotion',
      type: 'datetime',
    },
    {
      name: 'promocode',
      title: 'Code promotion',
      type: 'string',
    },
  ],
};
