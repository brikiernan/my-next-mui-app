import { Grid, Typography } from '@material-ui/core';

import Layout from '../components/Layout';
import ProTip from '../components/ProTip';

export default function Index() {
  return (
    <Layout title='Home'>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        style={{ height: '100vh' }}
      >
        <Grid item>
          <Typography variant='h4' component='h1' gutterBottom>
            Next.js with Material-UI example using TypeScript.
          </Typography>
          <ProTip />
        </Grid>
      </Grid>
    </Layout>
  );
}
