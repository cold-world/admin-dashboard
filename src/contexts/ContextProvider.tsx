import React, { createContext, ReactNode, useContext, useState } from 'react';

interface IInitialState {
  activeChat: boolean;
  activeCart: boolean;
  activeUserProfile: boolean;
  activeNotification: boolean;
  activeMenu: boolean;
  windowSize: undefined | number;
  setActiveChat: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveCart: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveUserProfile: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveNotification: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setWindowSize: React.Dispatch<React.SetStateAction<undefined | number>>;
}

const initialState: IInitialState = {
  activeChat: false,
  activeCart: false,
  activeNotification: false,
  activeUserProfile: false,
  activeMenu: false,
  windowSize: undefined,
  setActiveChat: () => {},
  setActiveCart: () => {},
  setActiveUserProfile: () => {},
  setActiveNotification: () => {},
  setActiveMenu: () => {},
  setWindowSize: (): number | undefined => {
    return;
  },
};

const StateContext = createContext<IInitialState>(initialState);

type ProviderProps = {
  children: ReactNode;
};

export const ContextProvider = ({ children }: ProviderProps): JSX.Element => {
  const [activeMenu, setActiveMenu] = useState<boolean>(initialState.activeMenu);
  const [activeChat, setActiveChat] = useState<boolean>(initialState.activeChat);
  const [activeCart, setActiveCart] = useState<boolean>(initialState.activeCart);
  const [activeNotification, setActiveNotification] = useState<boolean>(
    initialState.activeNotification
  );
  const [activeUserProfile, setActiveUserProfile] = useState<boolean>(
    initialState.activeUserProfile
  );
  const [windowSize, setWindowSize] = useState<undefined | number>(undefined);
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        activeChat,
        setActiveChat,
        activeNotification,
        setActiveNotification,
        activeCart,
        setActiveCart,
        activeUserProfile,
        setActiveUserProfile,
        windowSize,
        setWindowSize,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
