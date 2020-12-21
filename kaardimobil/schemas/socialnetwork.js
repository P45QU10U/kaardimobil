export default {
  name: 'socialnetwork',
  title: 'Réseaux sociaux',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom réseau social',
      type: 'string',
    },
    {
      name: 'socialnetworkurl',
      title: 'url réseau social',
      type: 'url',
      description: 'Adresse réseau social',
    },
    {
      name: 'socialnetworkicon',
      title: 'icône réseau social',
      type: 'image',
    },
  ],
};
