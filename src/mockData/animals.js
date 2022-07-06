const randBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const generateDataPerdido = () => {
  return {
    year: randBetween(2015, 2022),
    month: randBetween(1, 12),
    day: randBetween(1, 31),
  };
};

const OWNERS_LIST = [
  'Shaq',
  'Ernie',
  'Chuck',
  'Chris',
  'Shannon',
  'Skip',
  'Kobe',
  'Tucker',
];

const LOCALITY_LIST = [
  'Rio de Janeiro',
  'Cochabamba',
  'Valenzuela',
  'Portugal',
];

const ANIMAL_TYPES = ['Cat', 'Dog', 'Others'];

const PET_NAMES = [
  'Mutha',
  'Bride',
  'Mór',
  'Clytia',
  'Eleonora',
  'Aamir',
  'Yolotli',
  'Hanga',
  'Ithamar',
  'Wandal',
  'Abele',
  'Paraskevas',
  'Kartikeya',
  'Andries',
  'Randi',
  'Myrgjǫl',
  'Lucetta',
  'Lucky',
  'Shimmel',
  'Ota ',
];

export const generateRandomAnimalData = () => {
  let generatedData = [];
  for (let x = 0; x < 20; x++) {
    generatedData.push({
      id: randBetween(1, 100),
      type: ANIMAL_TYPES[randBetween(0, 3)],
      dataPerdido: {
        ...generateDataPerdido(),
      },
      petName: PET_NAMES[x],
      owner: OWNERS_LIST[randBetween(0, OWNERS_LIST.length)],
      ownerNumber: `+04 ${randBetween(100, 999)} ${randBetween(1000, 9999)}`,
      locality: LOCALITY_LIST[randBetween(0, LOCALITY_LIST.length)],
    });
  }

  return generatedData;
};

export const ANIMALS_DATA = [
  {
    id: 97,
    type: 'Dog',
    dataPerdido: { year: 2040, month: 7, day: 27 },
    petName: 'Mutha',
    owner: 'Tucker',
    ownerNumber: '+04 841 5272',
    locality: 'Portugal',
  },
  {
    id: 3,
    type: 'Cat',
    dataPerdido: { year: 2017, month: 5, day: 29 },
    petName: 'Bride',
    owner: 'Shaq',
    ownerNumber: '+04 801 6811',
    locality: 'Valenzuela',
  },
  {
    id: 63,
    type: 'Others',
    dataPerdido: { year: 2019, month: 2, day: 27 },
    petName: 'Mór',
    owner: 'Kobe',
    ownerNumber: '+04 971 6743',
    locality: 'Cochabamba',
  },
  {
    id: 83,
    type: 'Others',
    dataPerdido: { year: 2017, month: 1, day: 3 },
    petName: 'Clytia',
    owner: 'Skip',
    ownerNumber: '+04 905 9600',
    locality: 'Cochabamba',
  },
  {
    id: 91,
    type: 'Others',
    dataPerdido: { year: 2020, month: 8, day: 17 },
    petName: 'Eleonora',
    owner: 'Chris',
    ownerNumber: '+04 365 9745',
    locality: 'Rio de Janeiro',
  },
  {
    id: 69,
    type: 'Others',
    dataPerdido: { year: 2017, month: 4, day: 22 },
    petName: 'Aamir',
    owner: 'Tucker',
    ownerNumber: '+04 312 1790',
    locality: 'Rio de Janeiro',
  },
  {
    id: 67,
    type: 'Cat',
    dataPerdido: { year: 2017, month: 4, day: 19 },
    petName: 'Yolotli',
    owner: 'Shaq',
    ownerNumber: '+04 358 9535',
    locality: 'Valenzuela',
  },
  {
    id: 44,
    type: 'Dog',
    dataPerdido: { year: 2015, month: 6, day: 18 },
    petName: 'Hanga',
    owner: 'Shaq',
    ownerNumber: '+04 937 6681',
    locality: 'Valenzuela',
  },
  {
    id: 27,
    type: 'Cat',
    dataPerdido: { year: 2017, month: 4, day: 27 },
    petName: 'Ithamar',
    owner: 'Ernie',
    ownerNumber: '+04 587 1668',
    locality: 'Cochabamba',
  },
  {
    id: 85,
    type: 'Dog',
    dataPerdido: { year: 2021, month: 5, day: 23 },
    petName: 'Wandal',
    owner: 'Skip',
    ownerNumber: '+04 417 6273',
    locality: 'Cochabamba',
  },
  {
    id: 87,
    type: 'Cat',
    dataPerdido: { year: 2017, month: 1, day: 19 },
    petName: 'Abele',
    owner: 'Shaq',
    ownerNumber: '+04 395 6464',
    locality: 'Valenzuela',
  },
  {
    id: 38,
    type: 'Others',
    dataPerdido: { year: 2021, month: 7, day: 5 },
    petName: 'Paraskevas',
    owner: 'Ernie',
    ownerNumber: '+04 913 5491',
    locality: 'Cochabamba',
  },
  {
    id: 48,
    type: 'Others',
    dataPerdido: { year: 2020, month: 6, day: 26 },
    petName: 'Kartikeya',
    owner: 'Chris',
    ownerNumber: '+04 421 5619',
    locality: 'Rio de Janeiro',
  },
  {
    id: 94,
    type: 'Dog',
    dataPerdido: { year: 2015, month: 5, day: 18 },
    petName: 'Andries',
    owner: 'Ernie',
    ownerNumber: '+04 801 8962',
    locality: 'Rio de Janeiro',
  },
  {
    id: 43,
    type: 'Cat',
    dataPerdido: { year: 2021, month: 11, day: 27 },
    petName: 'Randi',
    owner: 'Kobe',
    ownerNumber: '+04 669 8747',
    locality: 'Valenzuela',
  },
  {
    id: 50,
    type: 'Dog',
    dataPerdido: { year: 2021, month: 11, day: 27 },
    petName: 'Myrgjǫl',
    owner: 'Chuck',
    ownerNumber: '+04 540 4032',
    locality: 'Portugal',
  },
  {
    id: 57,
    type: 'Dog',
    dataPerdido: { year: 2021, month: 11, day: 27 },
    petName: 'Lucetta',
    owner: 'Chuck',
    ownerNumber: '+04 447 1126',
    locality: 'Cochabamba',
  },
  {
    id: 295,
    type: 'Dog',
    dataPerdido: { year: 2015, month: 9, day: 20 },
    petName: 'Lucky',
    owner: 'Kobe',
    ownerNumber: '+04 103 1836',
    locality: 'Cochabamba',
  },
  {
    id: 68,
    type: 'Others',
    dataPerdido: { year: 2020, month: 7, day: 17 },
    petName: 'Shimmel',
    owner: 'Chris',
    ownerNumber: '+04 626 1880',
    locality: 'Portugal',
  },
  {
    id: 15,
    type: 'Others',
    dataPerdido: { year: 2015, month: 8, day: 4 },
    petName: 'Ota ',
    owner: 'Shannon',
    ownerNumber: '+04 750 3071',
    locality: 'Portugal',
  },
];

export const ANIMAL_IDS = ANIMALS_DATA.map((a) => a.id);
