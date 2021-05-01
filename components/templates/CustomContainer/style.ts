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
  }),
);
