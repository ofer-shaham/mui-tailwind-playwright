import { createTheme } from '@mui/material/styles';

export const getTheme = (mode: 'light' | 'dark' | 'blue') => {
  const themes = {
    light: createTheme({
      palette: {
        mode: 'light',
        primary: {
          main: '#2196f3',
        },
        background: {
          default: '#f5f5f5',
          paper: '#ffffff',
        },
      },
    }),
    dark: createTheme({
      palette: {
        mode: 'dark',
        primary: {
          main: '#90caf9',
        },
        background: {
          default: '#121212',
          paper: '#1e1e1e',
        },
      },
    }),
    blue: createTheme({
      palette: {
        mode: 'dark',
        primary: {
          main: '#2196f3',
        },
        background: {
          default: '#0a1929',
          paper: '#0d2137',
        },
      },
    }),
  };

  return themes[mode];
};