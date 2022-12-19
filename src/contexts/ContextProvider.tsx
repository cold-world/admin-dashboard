import React, { createContext, ReactNode, useContext, useState } from 'react';

type Mode = 'Ligth' | 'Dark';

interface IInitialState {
  themeSettings: boolean;
  currentMode: Mode;
  currentColor: string;
  activeChat: boolean;
  activeCart: boolean;
  activeUserProfile: boolean;
  activeNotification: boolean;
  activeMenu: boolean;
  categories: string[] | null;
  setCategories: React.Dispatch<React.SetStateAction<string[] | null>>;
  setActiveChat: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveCart: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveUserProfile: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveNotification: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentColor: React.Dispatch<React.SetStateAction<string>>;
  setCurrentMode: React.Dispatch<React.SetStateAction<Mode>>;
  setMode: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setThemeSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialState: IInitialState = {
  categories: null,
  themeSettings: false,
  currentMode: 'Ligth',
  currentColor: '#1A97F5',
  activeChat: false,
  activeCart: false,
  activeNotification: false,
  activeUserProfile: false,
  activeMenu: false,
  setCategories: () => {},
  setActiveChat: () => {},
  setActiveCart: () => {},
  setActiveUserProfile: () => {},
  setActiveNotification: () => {},
  setActiveMenu: () => {},
  setCurrentColor: () => {},
  setCurrentMode: () => {},
  setMode: () => {},
  setThemeSettings: () => {},
};

const StateContext = createContext<IInitialState>(initialState);

type ProviderProps = {
  children: ReactNode;
};

export const ContextProvider = ({ children }: ProviderProps): JSX.Element => {
  const [themeSettings, setThemeSettings] = useState<boolean>(initialState.themeSettings);
  const [currentMode, setCurrentMode] = useState<Mode>(initialState.currentMode);
  const [currentColor, setCurrentColor] = useState<string>(initialState.currentColor);
  const [activeMenu, setActiveMenu] = useState<boolean>(initialState.activeMenu);
  const [activeChat, setActiveChat] = useState<boolean>(initialState.activeChat);
  const [activeCart, setActiveCart] = useState<boolean>(initialState.activeCart);
  const [categories, setCategories] = useState<string[] | null>(initialState.categories);
  const [activeNotification, setActiveNotification] = useState<boolean>(
    initialState.activeNotification
  );
  const [activeUserProfile, setActiveUserProfile] = useState<boolean>(
    initialState.activeUserProfile
  );

  const setMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === 'Ligth') setCurrentMode(event.target.value);
    if (event.target.value === 'Dark') setCurrentMode(event.target.value);
    else return;
  };
  return (
    <StateContext.Provider
      value={{
        categories,
        setCategories,
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
        currentColor,
        setCurrentColor,
        currentMode,
        setCurrentMode,
        setMode,
        setThemeSettings,
        themeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
