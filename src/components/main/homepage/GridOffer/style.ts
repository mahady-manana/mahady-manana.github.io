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
    servicesh4: {
      fontSize: 16,
      textAlign: 'center',
      margin: '20px 0',
    },
  }),
);
