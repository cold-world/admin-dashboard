import React, { createContext, useContext, useState } from 'react';

interface IInitialState {
  // chat: boolean;
  // cart: boolean;
  // userProfile: boolean;
  // notification: boolean;
  activeMenu: boolean;
}

const initialState: IInitialState = {
  // chat: false,
  // cart: false,
  // userProfile: false,
  // notification: false,
  activeMenu: true,
};

const StateContext = createContext(initialState);

export const ContextProvider: React.FC<React.ReactNode> = (children) => {
  const [activeMenu, setActiveMenu] = useState<boolean>(initialState.activeMenu);
  return <StateContext.Provider value={{ activeMenu }}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
