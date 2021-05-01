import {
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuList: {
      display: 'inline-block',
      marginRight: '30px',
      fontSize: 20,
    },
    classesTest: {
      color: theme.palette.primary.main,
    },
    customContainer: {
      maxWidth: 960,
    },
    logoTitle: {
      color: theme.palette.primary.main,
      fontSize: 26,
    },
    captionLogo: {
      color: theme.palette.secondary.main,
      letterSpacing: 2,
    },
    listRoot: {
      '& a': {
        margin: '0 15px',
      },
    },
    listItemMenu: {
      padding: 0,
      '& .MuiListItemIcon-root': {
        minWidth: 35,
      },
    },
  }),
);
