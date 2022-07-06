import React from 'react';
import { useParams } from 'react-router-dom';
import { useAnimals } from 'context/AnimalContext';
import MainProvider from 'context';

const SingleCard = (props) => {
  const params = useParams();
  const { animalData } = useAnimals();

  if (!animalData?.length) return <></>;
  return <div>This should show {params.petId}</div>;
};

const CardWithProvider = () => (
  <MainProvider>
    <SingleCard />
  </MainProvider>
);

export default CardWithProvider;
