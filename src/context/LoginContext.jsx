import React, { useContext, useState } from 'react';
import { verifyLogin } from 'utils/apis';
import { useLoading } from './LoadingContext';

const LoginContext = React.createContext();

export const useLogin = () => {
  return useContext(LoginContext);
};

export const LoginProvider = ({ children }) => {
  const { setIsLoading, mockDelay } = useLoading();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(0);

  const checkLogin = async (username, password) => {
    setIsLoading(true);
    return verifyLogin(username, password)
      .then((res) => {
        setIsLoggedIn(true);
        setUserId(res);
      })
      .catch((e) => alert(e))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const logOut = () => {
    mockDelay(() => {
      setIsLoggedIn(false);
      setUserId(0);
    });
  };

  const contextValues = {
    isLoggedIn,
    userId,
    checkLogin,
    logOut,
  };

  return (
    <LoginContext.Provider value={contextValues}>
      {children}
    </LoginContext.Provider>
  );
};
