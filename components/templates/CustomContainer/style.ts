import {
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fullWidth: {
      width: '100%',
    },
    normal: {
      [theme.breakpoints.up('lg')]: {
        maxWidth: 1080,
        margin: 'auto',
      },
    },
    container: {
      width: '100%',
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
