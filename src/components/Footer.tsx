import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

export const Footer: React.FC = () => {
  const theme = useTheme();
  
  return (
    <Box
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2),
        textAlign: 'center',
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © 2024 Modern Dashboard. All rights reserved.
      </Typography>
    </Box>
  );
};