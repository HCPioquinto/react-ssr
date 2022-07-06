import React from 'react';
import Header from 'components/modules/Header';
import Footer from 'components/modules/Footer';
import Filter from 'components/modules/Filter';
import CardsContainer from './CardsContainer';

const MainPage = () => {
  return (
    <>
      <Header />
      <div className="main-layout">
        <Filter />
        <div className="center-page">
          <CardsContainer />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
