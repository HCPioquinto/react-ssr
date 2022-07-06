import React, { useState, useEffect } from 'react';
import { useAnimals } from 'context/AnimalContext';
import Card from 'components/modules/Card';
import { useDonations } from 'context/DonationsContext';
import { useLogin } from 'context/LoginContext';

const CardsContainer = () => {
  const { animalData, pages, setActivePage } = useAnimals();
  const { userDonos } = useDonations();
  const { isLoggedIn } = useLogin();

  const [cardsData, setCardsData] = useState(animalData);

  useEffect(() => {
    if (!animalData.length) return;
    const newCardsData = animalData.reduce((accum, curr) => {
      const userHasDonated = userDonos.some(
        (dono) => dono.idAnimal === curr.id
      );

      return accum.concat({
        ...curr,
        disableDonation: !isLoggedIn || userHasDonated,
      });
    }, []);

    setCardsData(newCardsData);
  }, [animalData, userDonos]);

  return (
    <div className="cards_container">
      {!cardsData.length ? (
        <h1>No animals found</h1>
      ) : (
        cardsData.map((animal) => (
          <Card key={animal.id} animalDetails={animal} />
        ))
      )}

      <div className="pagination_links">
        {[...Array(pages)].map((_, idx) => (
          <p
            key={idx}
            onClick={() => setActivePage(idx + 1)}
            className="pagination_link"
          >
            {idx + 1}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
