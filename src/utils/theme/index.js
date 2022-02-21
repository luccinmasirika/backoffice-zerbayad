import { createTheme } from '@mui/material';
import { blue, grey } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[700],
      50: blue[50],
      100: blue[100],
      200: blue[200],
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
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          padding: 8,
          background: grey[200],
        },
        input: {
          padding: 5,
          height: '1.8rem',
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          margin: 0,
          height: '1.8rem',
          padding: '10px 5px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '10px 35px',
        },
      },
    },
  },
});
