import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import createTheme from '@mui/material/styles/createTheme';

export const ThemeProvider = ({ children }: any) => {
  const theme = createTheme({
    typography: {
      fontFamily: '"Pretendard", sans-serif',
    },
    palette: {
      primary: {
        main: '#4971FC',
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
