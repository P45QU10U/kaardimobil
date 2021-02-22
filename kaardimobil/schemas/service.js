export default {
  name: 'services',
  title: 'Prestations',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom prestation',
      type: 'string',
      description: 'Ex: forfait vidange',
    },
    {
      name: 'description',
      title: 'Notes, descriptif',
      type: 'string',
    },
    {
      title: "Défaut",
      name: "defaultProductVariant",
      type: "serviceVariant",
    },
    {
      title: "Variantes",
      name: "variants",
      type: "array",
      of: [
        {
          title: "Variant",
          type: "serviceVariant",
        },
      ],
    },
    {
      title: 'Catégorie',
      name: 'category',
      type: 'reference',
      to: {type: "categoryservices"}
    }
  ],
};
