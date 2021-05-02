import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '40px 0',
    },
    titleCenter: {
      textAlign: 'center',
      fontSize: 30,
    },
    cardWithBg: {
      background: theme.palette.secondary.main,
      '& .MuiSvgIcon-root': {
        fill: '#fff',
      },
      '& *': {
        color: '#fff',
      },
    },
  }),
);
