import React, { useState } from 'react';

const useObjectState = (initialValue) => {
  const defaultState = { ...initialValue };
  const [state, setState] = useState(initialValue);

  const updateState = (key) => (value) => {
    const newState = {
      ...state,
      [key]: value,
    };

    setState(newState);
  };

  const resetToDefault = () => setState(defaultState);

  return [state, updateState, resetToDefault];
};

export default useObjectState;
