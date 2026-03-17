import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#141414',
    },
    secondary: {
      main: '#57408d',
    },
  },
  typography: {  /*fonte para o conteúdo da tag typography */
    fontFamily: [ 
      '"Segoe UI"',
  ].join(','),
}
});

theme = responsiveFontSizes(theme); /* comando para fonte responsiva */

export default theme;