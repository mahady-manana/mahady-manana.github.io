import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    expanded: {},
    checkbox: {
      color: '#000',
      root: {
        '.Mui-checked': {
          color: '#000',
        },
      },
    },
    checkboxItem: {
      background: 'none',
      '&.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label': {
        background: 'none',
      },
      '&.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label:hover': {
        background: 'none',
      },
    },
  }),
);
