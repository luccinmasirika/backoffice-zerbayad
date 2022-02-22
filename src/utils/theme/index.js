import { createTheme } from '@mui/material';

export const theme = (mode) => createTheme({
  palette: {
    mode,
  },
  typography: {
    fontFamily: 'Roboto',
    h1: {
      fontSize: 28,
      fontWeight: 700,
    },
    h2: {
      fontSize: 24,
      fontWeight: 700,
    },
    h6: {
      fontSize: 14,
      fontWeight: 500,
    },
  },
});
