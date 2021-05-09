import {
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    slider1: {
      background: 'linear-gradient(45deg, #00177b, #be3b48)',
      paddingTop: 120,
      paddingBottom: 50,
      [theme.breakpoints.down('sm')]: {
        paddingTop: 150,
        height: 'auto',
      },
    },
    slider2: {
      background: theme.palette.secondary.main,
      paddingTop: 120,
      paddingBottom: 50,
    },
    iconsSocials: {
      '& a': {
        marginRight: 10,
      },
      '& svg': {
        height: 25,
        width: 25,
      },
    },
    contentslide1: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },
    leftside: {
      width: '60%',
    },
    rightside: {
      width: '40%',
    },
    top: {
      background: 'linear-gradient(45deg, #00177b, #be3b48)',
      paddingTop: 160,
    },
  }),
);
