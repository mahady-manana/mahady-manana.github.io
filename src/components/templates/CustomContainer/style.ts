import {
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fullWidth: {
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        padding: '0 15px',
      },
    },
    normal: {
      [theme.breakpoints.up('lg')]: {
        maxWidth: 1080,
        margin: 'auto',
      },
      [theme.breakpoints.down('sm')]: {
        padding: '0 15px',
      },
    },
    container: {
      width: '100%',
      padding: '35px 0',
    },
    spacing2: {
      margin: '30px 0',
    },
    spacing1: {
      margin: '15px 0',
    },
    spacing3: {
      margin: '50px 0',
    },
  }),
);
