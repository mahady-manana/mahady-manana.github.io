import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#52c7b8',
      main: '#00177b',
      dark: '#00675b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffd95b',
      main: '#be3b48',
      dark: '#c77800',
      contrastText: '#000',
    },
  },
});

theme.typography.h2 = {
  fontSize: 30,
};
theme.typography.body1 = {
  lineHeight: '1.8em',
};
theme.typography.body2 = {
  lineHeight: '1.8em',
};
