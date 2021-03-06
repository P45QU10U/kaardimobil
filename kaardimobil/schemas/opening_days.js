export default {
  title: "Details des horaires",
  name: "weekdays",
  type: "object",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      title: "Lundi",
      name: "Monday",
      type: "array",
      of: [
        {
          title: "Variant",
          type: "openinghours",
        },
      ],
    },
    {
      title: "Mardi",
      name: "Tuesday",
      type: "array",
      of: [
        {
          title: "Variant",
          type: "openinghours",
        },
      ],
    },
    {
      title: "Mercredi",
      name: "Wednesday",
      type: "array",
      of: [
        {
          title: "Variant",
          type: "openinghours",
        },
      ],
    },
    {
      title: "Jeudi",
      name: "Thursday",
      type: "array",
      of: [
        {
          title: "Variant",
          type: "openinghours",
        },
      ],
    },
    {
      title: "Vendredi",
      name: "Friday",
      type: "array",
      of: [
        {
          title: "Variant",
          type: "openinghours",
        },
      ],
    },
    {
      title: "Samedi",
      name: "Saturday",
      type: "array",
      of: [
        {
          title: "Variant",
          type: "openinghours",
        },
      ],
    },
    {
      title: "Dimanche",
      name: "Sunday",
      type: "array",
      of: [
        {
          title: "Variant",
          type: "openinghours",
        },
      ],
    },
  ]
  }