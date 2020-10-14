import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Box, Grid, Toolbar } from '@material-ui/core';
import Copyright from './Copyright';

const useStyles = makeStyles(() => ({
  footerBar: {
    top: 'auto',
    bottom: 0
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <AppBar className={classes.footerBar}>
      <Toolbar>
        <Box m='auto'>
          <Grid component={Copyright} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
