import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    background: {
      default: 'white'
    }
  },
  typography: {
    fontFamily: 'Roboto'
  },
  shape: {
    borderRadius: 0
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none'
      }
    }
  },
  props: {
    MuiButton: {
      disableRipple: true,
      variant: 'contained'
    }
  }
});

export default theme;
