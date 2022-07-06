import React, { useContext, useState } from 'react';
import LoadingGif from 'assets/loading.gif';

const LoadingContext = React.createContext();

export const useLoading = () => {
  return useContext(LoadingContext);
};

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const mockDelay = (func) => {
    setIsLoading(true);
    const delayTimer = setTimeout(() => {
      func.apply(this);
      clearTimeout(delayTimer);
      setIsLoading(false);
    }, 1000);
  };

  const contextValues = {
    isLoading,
    setIsLoading,
    mockDelay,
  };

  return (
    <LoadingContext.Provider value={contextValues}>
      <div className={`loading_overlay ${isLoading ? '' : 'hidden'}`}>
        <img src={LoadingGif} alt="loading" className="loading_gif" />
      </div>
      {children}
    </LoadingContext.Provider>
  );
};
