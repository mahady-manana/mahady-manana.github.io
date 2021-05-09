import {
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core/styles';

export const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    paper: {
      padding: 20,
      textAlign: 'center',
    },
    paper2: {
      padding: 20,
      textAlign: 'center',
      background: 'transparent',
    },
  }),
);
