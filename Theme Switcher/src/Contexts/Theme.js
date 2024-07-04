import {createContext, useContext} from 'react'

export const Theme = createContext({
  ThemeMode: "light",
  lightMode: () => {},
  darkMode: () => {},
});

export const ThemeProvider = Theme.Provider;
export default function useTheme() {
  return useContext(Theme);
}
