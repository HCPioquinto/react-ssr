import { ANIMAL_IDS } from './animals';

const randBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const generateRandomDonos = () => {
  let data = [];

  for (let x = 0; x < 20; x++) {
    data.push({
      idAnimal: ANIMAL_IDS[randBetween(0, ANIMAL_IDS.length)],
      idUser: randBetween(1, 10),
      amount: randBetween(1, 50),
    });
  }

  return data;
};

export const DONATIONS = [
  { idAnimal: 83, idUser: 8, amount: 33 },
  { idAnimal: 85, idUser: 1, amount: 10 },
  { idAnimal: 43, idUser: 1, amount: 10 },
  { idAnimal: 15, idUser: 1, amount: 10 },
  { idAnimal: 15, idUser: 8, amount: 37 },
  { idAnimal: 295, idUser: 3, amount: 21 },
  { idAnimal: 91, idUser: 2, amount: 41 },
  { idAnimal: 91, idUser: 8, amount: 1 },
  { idAnimal: 83, idUser: 5, amount: 19 },
  { idAnimal: 91, idUser: 3, amount: 9 },
  { idAnimal: 38, idUser: 3, amount: 7 },
  { idAnimal: 3, idUser: 7, amount: 35 },
  { idAnimal: 83, idUser: 7, amount: 18 },
  { idAnimal: 57, idUser: 7, amount: 28 },
  { idAnimal: 295, idUser: 8, amount: 39 },
  { idAnimal: 50, idUser: 8, amount: 30 },
  { idAnimal: 15, idUser: 5, amount: 47 },
  { idAnimal: 67, idUser: 8, amount: 6 },
  { idAnimal: 44, idUser: 7, amount: 35 },
  { idAnimal: 67, idUser: 3, amount: 8 },
];
