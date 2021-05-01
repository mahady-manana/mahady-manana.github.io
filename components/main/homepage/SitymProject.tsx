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
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Button } from '@material-ui/core';
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
      backgroundColor: red[500],
    },
  }),
);

export const SitymProject = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            FS
          </Avatar>
        }
        title="FUTURE SLIDER"
        subheader="React Component for better Slider and Caroussel"
      />
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
        >
          This impressive paella is a perfect party.
        </Typography>
        <div>
          <Button startIcon={<GitHubIcon />} variant="contained">
            Contribution
          </Button>
        </div>
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
  );
};
