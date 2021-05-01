import {
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainHeader: {
      position: 'relative',
      zIndex: 999999,
    },
    menuList: {
      display: 'inline-block',
      marginRight: '30px',
      fontSize: 20,
    },
    classesTest: {
      color: theme.palette.primary.main,
    },
    logoTitle: {
      fontSize: 22,
      color: '#fff',
    },
    captionLogo: {
      letterSpacing: 2,
      color: '#fff',
    },
    listRoot: {
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
      },
      justifyContent: 'flex-end',
      display: 'flex',
      '& a': {
        margin: '0 15px',
      },
    },
    listItemMenu: {
      padding: 0,
      '& .MuiListItemIcon-root': {
        minWidth: 35,
      },
      '& svg': {
        fill: '#fff',
      },
      '& .MuiTypography-root': {
        color: '#fff',
      },
    },
    logoGrid: {
      background: 'linear-gradient(45deg, #973453, transparent)',
      marginTop: 10,
      padding: '5px 40px',
      textAlign: 'center',
      borderRadius: 40,
    },
    gridRight: {
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
      width: '65%',
      marginTop: 10,
    },
    mobile: {
      [theme.breakpoints.down('sm')]: {
        display: 'block',
      },
    },
  }),
);
