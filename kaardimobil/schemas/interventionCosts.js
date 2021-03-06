export default {
  name: 'interventioncosts',
  title: 'Coût intervention distance',
  type: 'object',
  fields: [
    {
      name: 'distance',
      title: 'palier distance max (en km)',
      type: 'number',
      description: 'Indiquer le prix maximum pour cette distance',
    },
    {
      name: 'price',
      title: 'Coût intervention',
      type: 'string',
      description: 'Coût intervention pour cette distance max (ex: Gratuit, 15€)',
    }
  ],
};
