import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import React from 'react';
import { CustomContainer } from '../../../templates';
import { theme } from '../../../../common/theme';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import WebIcon from '@material-ui/icons/Language';
import { useStyles } from './style';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';
import CodeIcon from '@material-ui/icons/Code';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import ContactsIcon from '@material-ui/icons/Contacts';

export const GridOffer = () => {
  const classes = useStyles();
  return (
    <CustomContainer normal>
      <Box>
        <Typography
          variant="h2"
          color="primary"
          style={{ textAlign: 'center' }}
        >
          Take a look{' '}
          <span style={{ color: theme.palette.secondary.main }}>
            at my offer!
          </span>
        </Typography>
      </Box>
      <Box>
        <Typography variant="h4" className={classes.servicesh4}>
          FIND OUT MY SERVICES FOR YOU
        </Typography>
        <Typography
          variant="h4"
          color="primary"
          className={classes.servicesh4}
        >
          ALL in JS
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={3}>
          <Grid item sm={4} xs={12}>
            <Paper className={classes.paper}>
              <Box>
                <WebIcon
                  color="primary"
                  style={{ width: 60, height: 60 }}
                />
              </Box>
              <Box>
                <Typography>
                  Well, Need to build a website ? that why we are a
                  web developer. I offer to you a modern website
                  according to your need. Performance, readability
                  ,SEO , responsiveness, great user experience,
                  technical support...
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Paper className={classes.paper}>
              <Box>
                <HelpOutlineIcon
                  color="primary"
                  style={{ width: 60, height: 60 }}
                />
              </Box>
              <Box>
                <Typography>
                  You need to offer a technical support to your team
                  or to your client. You are looking for your someone
                  who can provide a good services to your client. Or
                  need speed development to your project. You can
                  contact or hire me!!
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Paper className={classes.paper}>
              <Box>
                <PermDataSettingIcon
                  color="primary"
                  style={{ width: 60, height: 60 }}
                />
              </Box>
              <Box>
                <Typography>
                  You have a project in mind ? Need special
                  customization and development. I will be in your
                  line to help you and to provide you some usefull
                  technical tips to make your project performant,
                  maintainable and modern.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Paper className={classes.paper2} elevation={0}>
              <Box>
                <CodeIcon
                  color="secondary"
                  style={{ width: 60, height: 60 }}
                />
              </Box>
              <Box>
                <Typography>
                  Development of reusable module is one key to the
                  maintainability of your applcation. But such
                  reusable module need to be developed carefully and
                  follow some guidelines to prevent problem in you
                  application and website.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Paper className={classes.paper2} elevation={0}>
              <Box>
                <LocalLibraryIcon
                  color="secondary"
                  style={{ width: 60, height: 60 }}
                />
              </Box>
              <Box>
                <Typography>
                  If you need some help in the Javascript world or
                  React and want to learn it from the ground or want
                  to improve your technical skills. I help you to
                  become a great Javascript developer
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Paper className={classes.paper2} elevation={0}>
              <Box>
                <ContactsIcon
                  color="secondary"
                  style={{ width: 60, height: 60 }}
                />
              </Box>
              <Box>
                <Typography>
                  Don't hesitate to contact me if you need help in web
                  development or need some technical support to your
                  team. Javascript ? Typescript ? React ? Nodejs ?
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </CustomContainer>
  );
};
