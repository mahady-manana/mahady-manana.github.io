import {
  Box,
  createStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      background: theme.palette.primary.main,
      color: '#fff',
      padding: 15,
      textAlign: 'center'
    },
  }),
);
export const Footer = () => {
    const classes = useStyles()
  return (
    <footer>
      <Box className={classes.footer}>
        <Typography>© Copyright 2021 - Mahady Manana</Typography>
      </Box>
    </footer>
  );
};
