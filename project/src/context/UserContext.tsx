import React, { createContext, useContext, useState } from 'react';

interface User {
  name: string;
  email: string;
  phone: string;
}

interface UserContextType {
  users: User[];
  addUser: (user: User) => boolean;
  findUserByEmail: (email: string) => User | undefined;
  validateLogin: (email: string, password: string) => boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [passwords, setPasswords] = useState<Record<string, string>>({});

  const addUser = (user: User, password: string) => {
    // Check if email already exists
    if (users.some(u => u.email === user.email)) {
      return false;
    }

    // Check if name already exists
    if (users.some(u => u.name === user.name)) {
      return false;
    }

    setUsers(prev => [...prev, user]);
    setPasswords(prev => ({ ...prev, [user.email]: password }));
    return true;
  };

  const findUserByEmail = (email: string) => {
    return users.find(user => user.email === email);
  };

  const validateLogin = (email: string, password: string) => {
    return passwords[email] === password;
  };

  return (
    <UserContext.Provider value={{ users, addUser, findUserByEmail, validateLogin }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};