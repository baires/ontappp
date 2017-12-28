export const beerColors = [
  {
    name: 'Pale Ale',
    PrimaryColor: '#C04800',
    SecondaryColor: '#C04800'
  },
  {
    name: 'Brown Ale',
    PrimaryColor: '#A86048',
    SecondaryColor: '#783030'
  },
  {
    name: 'Amber Ale',
    PrimaryColor: '#F09000',
    SecondaryColor: '#D86018'
  },
  {
    name: 'Kolsch',
    PrimaryColor: '#F1D744',
    SecondaryColor: '#c7a92d'
  },
  {
    name: 'Heineken',
    PrimaryColor: '#F0C030',
    SecondaryColor: '#d4a20e'
  },
  {
    name: 'Guinness',
    PrimaryColor: '#483030',
    SecondaryColor: '#111106'
  },
  {
    name: 'Stout',
    PrimaryColor: '#786048',
    SecondaryColor: '#483030'
  },
  {
    name: 'Pilsner',
    PrimaryColor: '#F0C000',
    SecondaryColor: '#F09000'
  }
];

export function convertToSlug(Text) {
  return Text.toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}
