import React from 'react';
import { LoginProvider } from './LoginContext';
import { AnimalProvider } from './AnimalContext';
import { LoadingProvider } from './LoadingContext';
import { DonationsProvider } from './DonationsContext';

const MainProvider = ({ children }) => {
  return (
    <LoadingProvider>
      <LoginProvider>
        <AnimalProvider>
          <DonationsProvider>{children}</DonationsProvider>
        </AnimalProvider>
      </LoginProvider>
    </LoadingProvider>
  );
};

export default MainProvider;
