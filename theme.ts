import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#13a1c7',
      contrastText: '#fff',
    },
    secondary: {
      main: '#85dcf3',
      contrastText: '#243c2c',
    },
    info: {
      main: '#0c98bc',
      contrastText: '#fff',
    },
    success: {
      main: '#48C774',
      contrastText: '#fff',
    },
    warning: {
      main: '#FFC846',
      contrastText: '#243c2c',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'].join(','),
  },
});

export default theme;
