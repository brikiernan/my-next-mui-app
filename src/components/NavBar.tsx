import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import Link from '../../src/components/Link';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1
  },
  navLink: {
    marginRight: '2rem'
  },
  btn: {
    marginRight: '2rem'
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar>
        <Typography variant='h6' className={classes.title}>
          <Link href='/' color='inherit'>
            Logo Here
          </Link>
        </Typography>
        <Typography variant='body1' className={classes.navLink}>
          <Link href='/about' color='inherit'>
            About
          </Link>
        </Typography>
        <Typography variant='body1' className={classes.navLink}>
          <Link href='/users' color='inherit'>
            Users List
          </Link>
        </Typography>
        <Typography variant='body1' className={classes.navLink}>
          <Link href='/api/users' color='inherit'>
            Users API
          </Link>
        </Typography>
        <Button variant='outlined' color='inherit' className={classes.btn}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}
