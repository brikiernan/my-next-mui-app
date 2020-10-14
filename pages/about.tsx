import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Theme,
  makeStyles,
  createStyles,
  Paper
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import SendIcon from '@material-ui/icons/Send';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import SaveIcon from '@material-ui/icons/Save';

import Layout from '../src/components/Layout';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1)
      }
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary
    }
  })
);

export default function About() {
  const classes = useStyles();

  return (
    <Layout title='About'>
      <Box marginTop={12}>
        <Grid container direction='row' justify='center' alignItems='center' spacing={6}>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <Typography>Text Field's Sandbox</Typography>
              <form noValidate autoComplete='off'>
                <TextField margin='normal' fullWidth id='standard-basic' label='Standard' />
                <TextField
                  margin='normal'
                  fullWidth
                  id='filled-basic'
                  label='Filled'
                  variant='filled'
                />
                <TextField
                  margin='normal'
                  fullWidth
                  id='outlined-basic'
                  label='Outlined'
                  variant='outlined'
                />
              </form>
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <Typography>Button Sandbox</Typography>
              <div className={classes.root}>
                <Button variant='contained'>Default</Button>
                <Button variant='contained' color='primary'>
                  Primary
                </Button>
                <Button variant='contained' color='secondary'>
                  Secondary
                </Button>
                <Button variant='contained' disabled>
                  Disabled
                </Button>
                <Button variant='contained' color='primary' href='#contained-buttons'>
                  Link
                </Button>
              </div>
              <div className={classes.root}>
                <Button variant='outlined'>Default</Button>
                <Button variant='outlined' color='primary'>
                  Primary
                </Button>
                <Button variant='outlined' color='secondary'>
                  Secondary
                </Button>
                <Button variant='outlined' disabled>
                  Disabled
                </Button>
                <Button variant='outlined' color='primary' href='#outlined-buttons'>
                  Link
                </Button>
              </div>
              <div className={classes.root}>
                <Button variant='contained' color='secondary' startIcon={<DeleteIcon />}>
                  Delete
                </Button>
                {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
                <Button variant='contained' color='primary' endIcon={<SendIcon />}>
                  Send
                </Button>
                <Button variant='contained' color='default' startIcon={<CloudUploadIcon />}>
                  Upload
                </Button>
                <Button
                  variant='contained'
                  disabled
                  color='secondary'
                  startIcon={<KeyboardVoiceIcon />}
                >
                  Talk
                </Button>
                <Button variant='contained' color='primary' size='small' startIcon={<SaveIcon />}>
                  Save
                </Button>
                <Button variant='contained' color='primary' size='large' startIcon={<SaveIcon />}>
                  Save
                </Button>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
