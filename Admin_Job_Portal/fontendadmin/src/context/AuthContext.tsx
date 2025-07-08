'use client';
import React, { createContext, useState, useContext } from 'react';
import api from '../lib/api';

interface AuthContextType {
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(
    typeof window !== 'undefined' ? localStorage.getItem('access_token') : null
  );

  const login = async (email: string, password: string) => {
    const resp = await api.post('/admin/login', { email, password });
    const access_token = resp.data.access_token;
    localStorage.setItem('access_token', access_token);
    setToken(access_token);
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};