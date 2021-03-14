export default {
  name: 'socialnetwork',
  title: 'Réseaux sociaux',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Réseau social',
      description: 'Facebook, Twitter, YouTube, TikTok...',
      type: 'string',
    },
    {
      name: 'nickname',
      title: 'Pseudo réseau social',
      type: 'string',
    },
    {
      name: 'socialnetworkurl',
      title: 'adresse réseau social',
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
