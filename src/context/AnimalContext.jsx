import React, { useContext, useEffect, useState } from 'react';
import { getAnimalPerPage } from 'utils/apis';
import { ORDER_DATE, ORDER_NAME } from 'constants/filters';
import useObjectState from 'hooks/useUpdateState';
import { useLoading } from './LoadingContext';
import { useLogin } from './LoginContext';
import { DONATIONS } from 'mockData/donations';

const AnimalContext = React.createContext();

export const useAnimals = () => {
  return useContext(AnimalContext);
};

export const AnimalProvider = ({ children }) => {
  const { userId } = useLogin();

  const { setIsLoading } = useLoading();
  const [filters, setFilters] = useObjectState({
    region: '',
    orderDate: ORDER_DATE[0],
    orderNames: ORDER_NAME[0],
  });

  const [allDonos, setAllDonos] = useState(DONATIONS);
  const [animalData, setAnimalData] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    setIsLoading(true);

    const effect = async () => {
      if (filters.region) setActivePage(1);

      const filteredAnimals = await getAnimalPerPage(filters);
      setPages(filteredAnimals.fetchPages());
      const animalsPerPage = await filteredAnimals.fetchForPage(activePage);

      if (!animalsPerPage.error) {
        const newAnimalData = animalsPerPage.reduce((accum, curr) => {
          return accum.concat({
            ...curr,
            donations: allDonos
              .filter((dono) => dono.idAnimal === curr.id)
              .reduce((total, dono) => total + dono.amount, 0),
          });
        }, []);

        setAnimalData(newAnimalData);
      } else {
        setAnimalData([]);
      }
      setIsLoading(false);
    };
    effect();
  }, [filters, activePage, allDonos.length]);

  const addNewDono = (newUserDono) => {
    setAllDonos([...allDonos, newUserDono]);
  };

  const contextData = {
    filters,
    setFilters,
    setActivePage,
    animalData,
    pages,
    setAnimalData,
    addNewDono,
  };

  return (
    <AnimalContext.Provider value={contextData}>
      {children}
    </AnimalContext.Provider>
  );
};
