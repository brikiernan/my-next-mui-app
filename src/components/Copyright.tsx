import Typography from '@material-ui/core/Typography';
import Link from '../../src/components/Link';

export default function Copyright() {
  return (
    <Typography variant='body2' color='inherit' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
