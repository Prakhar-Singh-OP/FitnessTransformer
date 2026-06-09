import React, { createContext, useContext, useMemo, useState } from 'react';

export type AppTheme = {
  dark: boolean;
  background: string;
  card: string;
  text: string;
  accent: string;
  secondary: string;
  border: string;
  input: string;
};

type ThemeContextType = {
  theme: AppTheme;
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const lightTheme: AppTheme = {
  dark: false,
  background: '#f8fafc',
  card: '#e2e8f0',
  text: '#0f172a',
  accent: '#2563eb',
  secondary: '#475569',
  border: '#cbd5e1',
  input: '#ffffff',
};

const darkTheme: AppTheme = {
  dark: true,
  background: '#020617',
  card: '#111827',
  text: '#f8fafc',
  accent: '#38bdf8',
  secondary: '#94a3b8',
  border: '#334155',
  input: '#0f172a',
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(true);

  const value = useMemo(
    () => ({
      isDark,
      theme: isDark ? darkTheme : lightTheme,
      toggleTheme: () => setIsDark((current) => !current),
    }),
    [isDark],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
