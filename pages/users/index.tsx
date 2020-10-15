import { GetStaticProps } from 'next';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { User } from '../../src/interfaces';
import { sampleUserData } from '../../src/utils/sample-data';
import Layout from '../../src/components/Layout';
import Link from '../../src/components/Link';
import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

type Props = {
  items: User[];
};

const WithStaticProps = ({ items }: Props) => {
  const classes = useStyles();

  return (
    <Layout title='Users Table'>
      <Box maxWidth={'50rem'} mx='auto' mt={12}>
        <Box p={2}>
          <Typography>
            Example fetching data from inside <code>getStaticProps()</code>.
          </Typography>
        </Box>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>User Names</TableCell>
                <TableCell align='right'>ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map(row => (
                <TableRow key={row.id}>
                  <TableCell component='th' scope='row'>
                    <Link href={`/users/${row.id}`}>{row.name}</Link>
                  </TableCell>
                  <TableCell align='right'>{row.id}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = sampleUserData;
  return { props: { items } };
};

export default WithStaticProps;
