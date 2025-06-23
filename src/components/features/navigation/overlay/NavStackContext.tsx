/**
 * NavStackContext: Provides navigation stack state for multi-level overlays.
 */
import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface NavStackContextType {
  open: boolean;
  navStack: string[];
  setNavStack: React.Dispatch<React.SetStateAction<string[]>>;
  setOpen: (open: boolean) => void;
}

const NavStackContext = createContext<NavStackContextType | undefined>(undefined);

export const useNavStack = () => {
  const ctx = useContext(NavStackContext);
  if (!ctx) throw new Error('useNavStack must be used within NavStackProvider');
  return ctx;
};

export const NavStackProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [navStack, setNavStack] = useState<string[]>([]);
  return (
    <NavStackContext.Provider value={{ open, navStack, setNavStack, setOpen }}>
      {children}
    </NavStackContext.Provider>
  );
};
