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
      type: "string",
      description: '08:00-19:00 pour journée continue 08:00-12:00 14:00-19:00 si coupure'
    },
    {
      title: "Mardi",
      name: "Tuesday",
      type: "string",
    },
    {
      title: "Mercredi",
      name: "Wednesday",
      type: "string",
    },
    {
      title: "Jeudi",
      name: "Thursday",
      type: "string",
    },
    {
      title: "Vendredi",
      name: "Friday",
      type: "string",
    },
    {
      title: "Samedi",
      name: "Saturday",
      type: "string",
    },
    {
      title: "Dimanche",
      name: "Sunday",
      type: "string",
    },
  ]
  }