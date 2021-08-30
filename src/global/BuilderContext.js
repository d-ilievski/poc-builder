import { createContext, useState } from 'react';

const BuilderContext = createContext();

const defaultState = {
  elements: [],
  currentSelection: null,
};

const BuilderProvider = ({ children }) => {
  const [state, setState] = useState(defaultState);

  return (
    <BuilderContext.Provider value={{ state, setState }}>
      {children}
    </BuilderContext.Provider>
  );
};

export { BuilderProvider, BuilderContext };
