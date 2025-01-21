import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, useTheme } from '@mui/material';
import { Menu, Sun, Moon, Palette } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setThemeMode } from '../store/themeSlice';

interface AppHeaderProps {
  onToggleSidebar: () => void;
}

export const AppHeader: React.FC<AppHeaderProps> = ({ onToggleSidebar }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const toggleTheme = () => {
    const themes = ['light', 'dark', 'blue'];
    const currentIndex = themes.indexOf(theme.palette.mode);
    const nextTheme = themes[(currentIndex + 1) % themes.length] as 'light' | 'dark' | 'blue';
    dispatch(setThemeMode(nextTheme));
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={onToggleSidebar}
          sx={{ mr: 2 }}
          aria-label="menu"
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Modern Dashboard
        </Typography>
        <IconButton 
          color="inherit" 
          onClick={toggleTheme}
          aria-label="theme-toggle"
        >
          {theme.palette.mode === 'light' ? <Moon /> : theme.palette.mode === 'dark' ? <Palette /> : <Sun />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};