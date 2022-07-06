import { ORDER_DATE, ORDER_NAME } from 'constants/filters';
import { ANIMALS_DATA } from 'mockData/animals';
import { DONATIONS } from 'mockData/donations';

export const verifyLogin = async (username, password) => {
  return await new Promise((resolve, reject) => {
    const mockTimer = setTimeout(() => {
      if (username && password) {
        resolve(1);
      } else {
        reject('Please fill out both fields.');
      }
      clearTimeout(mockTimer);
    }, 1000);
  });
};

const convertDatePerdidoToDate = ({ day, year, month }) => {
  return new Date(year, month, day).getTime();
};

const stringSorter = (a, b) => {
  const aLower = a.toLowerCase();
  const bLower = b.toLowerCase();

  if (aLower < bLower) {
    return 1;
  }

  if (aLower > bLower) {
    return -1;
  }

  return 0;
};

const mockAnimalBackend = ({ region, orderDate, orderNames }) => {
  const animalData = [...ANIMALS_DATA];
  return new Promise((resolve) => {
    let filteredData = animalData.reduce((accum, elem) => {
      if (region) {
        const isValid = elem.locality
          .toLowerCase()
          .includes(region.toLowerCase());

        if (!isValid) return accum;
      }

      return accum.concat({
        ...elem,
      });
    }, []);

    filteredData = [...filteredData].sort((a, b) => {
      const nameOrder =
        orderNames === ORDER_NAME[1]
          ? stringSorter(a.petName, b.petName)
          : stringSorter(b.petName, a.petName);

      const dateOrder =
        orderDate === ORDER_DATE[1]
          ? convertDatePerdidoToDate(a.dataPerdido) -
            convertDatePerdidoToDate(b.dataPerdido)
          : convertDatePerdidoToDate(b.dataPerdido) -
            convertDatePerdidoToDate(a.dataPerdido);

      return dateOrder || nameOrder;
    });

    resolve(filteredData);
  });
};

export const getAnimalPerPage = async (filters) => {
  const pageLength = 6;
  const animalData = await mockAnimalBackend(filters);

  return {
    fetchForPage: (page) => {
      const pageStart = (page - 1) * pageLength;
      const pageEnd = pageStart + pageLength;
      return new Promise((resolve, reject) => {
        const mockDelay = setTimeout(() => {
          if (!animalData.length) {
            clearTimeout(mockDelay);
            return resolve({ error: 'No animals to show' });
          }
          if (pageEnd > animalData.length) {
            clearTimeout(mockDelay);
            return resolve(animalData.slice(pageStart, animalData.length));
          }
          clearTimeout(mockDelay);
          return resolve(animalData.slice(pageStart, pageEnd));
        }, 1000);
      });
    },

    fetchPages: () => {
      return Math.floor(animalData.length / pageLength);
    },
  };
};

export const getUserDonations = (userId) => {
  const userDonos = DONATIONS.filter((a) => a.idUser === userId);
  if (!userDonos.length) return [];
  return userDonos.reduce((accum, elem) => {
    const animalData = ANIMALS_DATA.find((a) => a.id === elem.idAnimal);

    return accum.concat({
      ...elem,
      animalData,
    });
  }, []);
};
