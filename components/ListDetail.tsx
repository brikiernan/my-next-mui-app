import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Box,
  makeStyles,
  Button
} from '@material-ui/core';

import { User } from '../lib/interfaces';
import Layout from './Layout';
import Link from '../components/Link';

type ListDetailProps = {
  item: User;
};

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: '1rem'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 0
  }
});

const ListDetail = ({ item: user }: ListDetailProps) => {
  const classes = useStyles();

  return (
    <Layout>
      <Box maxWidth={'50rem'} mx='auto'>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color='textSecondary' gutterBottom>
              User Details
            </Typography>
            <Typography variant='h5' component='h2'>
              Name: {user.name}
            </Typography>
            <Typography className={classes.pos} color='textSecondary'>
              ID: {user.id}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant='outlined'>
              <Link color='inherit' href='/users'>
                Back To Users
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Layout>
  );
};

export default ListDetail;
