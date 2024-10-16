import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif' 
  },
  palette: {
    primary: {
      main: '#2AA8FF', 
    },
    dark : {
      main : '#102851',
    },
    black : {
      main : '#333',
    },
    light: {
      main: '#eaf2ff',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem', 
          fontWeight: "normal",
          padding: '8px 20px', 
          textTransform: 'none',
          borderRadius: "9px",
          color: "#fff",
          whiteSpace:"nowrap",
        },
        containedPrimary: {
          backgroundColor: '#2AA8FF', 
          '&:hover': {
            backgroundColor: '#3aaaf7', // Hover state color for primary buttons
          },
        },
      },
    },
  },
});

export default theme;
