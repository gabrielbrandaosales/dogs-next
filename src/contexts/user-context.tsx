'use client';

import React from 'react';

type User = {
  id: number;
  nome: string;
  username: string;
  email: string;
};

type IUserContext = {
  user: User | null;
  setUserState: React.Dispatch<React.SetStateAction<User | null>>;
};

const UserContext = React.createContext<IUserContext | null>(null);

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within an UserContextProvider');
  }
  return context;
};

export function UserContextProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User | null;
}) {
  const [userState, setUserState] = React.useState<User | null>(user);
  return (
    <UserContext.Provider value={{ user: userState, setUserState }}>
      {children}
    </UserContext.Provider>
  );
}
