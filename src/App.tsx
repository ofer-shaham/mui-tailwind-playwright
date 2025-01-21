import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Box, useMediaQuery } from '@mui/material';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import { store, RootState } from './store/store';
import { getTheme } from './theme/theme';
import { AppHeader } from './components/AppHeader';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { DashboardGrid } from './components/DashboardGrid';

const DashboardContent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const themeMode = useSelector((state: RootState) => state.theme.mode);
  const theme = getTheme(themeMode);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <AppHeader onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            marginTop: '64px',
            marginLeft: !isMobile && sidebarOpen ? '240px' : 0,
            marginBottom: '60px',
            transition: theme.transitions.create('margin', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          }}
        >
          <DashboardGrid />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

function App() {
  return (
    <Provider store={store}>
      <DashboardContent />
    </Provider>
  );
}

export default App;