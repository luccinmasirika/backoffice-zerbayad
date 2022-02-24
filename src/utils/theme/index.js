import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

export const theme = (mode) => createTheme({
  palette: {
    mode,
    grey: {
      main: mode === "dark" ? grey[200] : grey[800],
      secondary: mode === "dark" ? grey[400] : grey["A200"],
      darkLight: mode === "dark" ? grey[800] : grey[200],
      dark: mode === "dark" ? grey[900] : grey[50],
    },
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
