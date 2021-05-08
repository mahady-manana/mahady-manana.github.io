import React from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { Button, Grid } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '40',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: theme.palette.primary.main,
    },
  }),
);

export const SitymProject = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="recipe"
                  className={classes.avatar}
                >
                  FS
                </Avatar>
              }
              title="FUTURE SLIDER"
              subheader="Modern React Component for better Slider and Caroussel"
            />
            <CardContent>
              <div>
                <Button
                  startIcon={<CodeIcon />}
                  color="primary"
                  variant="contained"
                >
                  Get started
                </Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="recipe"
                  className={classes.avatar}
                >
                  FS
                </Avatar>
              }
              title="FUTURE SLIDER"
              subheader="Modern React Component for better Slider and Caroussel"
            />
            <CardContent>
              <div>
                <Button
                  startIcon={<CodeIcon />}
                  color="primary"
                  variant="contained"
                >
                  Get started
                </Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
