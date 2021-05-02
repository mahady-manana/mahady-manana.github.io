import React from 'react';
import {
  Theme,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    root: {
      background: 'transparent',
      maxWidth: 500,
      margin: 'auto',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      padding: 30,
    },
    content: {
      flex: '1 0 auto',
    },
  }),
);

export const PresentationSitym = () => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root} elevation={0}>
        <div className={classes.details}>
          <div style={{ textAlign: 'center' }}>
            <Typography variant="h2" color="primary">
              SiTYM
            </Typography>
            <div>********</div>
            <Typography variant="h4" color="primary">
              Open Source Project
            </Typography>
            <div>********</div>
            <p>
              SiTYM is an Open Source Project for modern web
              application, web component.
            </p>
          </div>
        </div>
      </Card>
    </>
  );
};
