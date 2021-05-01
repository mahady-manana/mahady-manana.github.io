import React from 'react';
import {
  Theme,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useStyles as ownStyle } from './style';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Twitter from '@material-ui/icons/Twitter';
import Drafts from '@material-ui/icons/Drafts';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
        visibility: 'hidden',
      },
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      padding: 30,
      maxWidth: 500,
      background: '#dedede',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
      },
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        height: 400,
      },
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    mobileCard: {
      display: 'none',
      [theme.breakpoints.down('sm')]: {
        display: 'block',
      },
    },
  }),
);

export const Presentation = () => {
  const classes = useStyles();
  const classes2 = ownStyle();
  //   const theme = useTheme();

  return (
    <>
      <Card className={classes.root} elevation={2}>
        <div className={classes.details}>
          <div style={{ textAlign: 'center' }}>
            <Typography variant="h2">Mahady Manana</Typography>
            <div>********</div>
            <div className={classes2.iconsSocials}>
              <a href="/">
                <GitHub />
              </a>
              <a href="/">
                <LinkedIn />
              </a>
              <a href="/">
                <Twitter />
              </a>
              <a href="/">
                <Drafts />
              </a>
            </div>
            <div>********</div>
            <p>
              Mahady Manana is a Malagasy Javascript Developer.
              Experienced in Frontend development and Backend API, I
              work as a Reactjs - Nodejs Developer. Also, I help Tech
              team, Organisation, Company and individual developer in
              their project and contribute to open-source project.
            </p>
          </div>
        </div>
        <CardMedia
          className={classes.cover}
          image="/Mahady-Manana.png"
          title="Mahady Manana"
        />
      </Card>
      <div className={classes.mobileCard}>
        <div className={classes.details}>
          <div style={{ textAlign: 'center' }}>
            <Typography variant="h2">Mahady Manana</Typography>
            <div>********</div>
            <div className={classes2.iconsSocials}>
              <a href="/">
                <GitHub />
              </a>
              <a href="/">
                <LinkedIn />
              </a>
              <a href="/">
                <Twitter />
              </a>
              <a href="/">
                <Drafts />
              </a>
            </div>
            <div>********</div>
            <p>
              Mahady Manana is a Malagasy Javascript Developer.
              Experienced in Frontend development and Backend API, I
              work as a Reactjs - Nodejs Developer. Also, I help Tech
              team, Organisation, Company and individual developer in
              their project and contribute to open-source project.
            </p>
          </div>
        </div>
        <CardMedia
          className={classes.cover}
          image="/Mahady-Manana.png"
          title="Mahady Manana"
        />
      </div>
    </>
  );
};
