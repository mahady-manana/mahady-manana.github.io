import React from 'react';
import {
  Avatar,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
import { CustomContainer } from '../../../templates';
import { useStyles } from './style';
export const Presentation = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CustomContainer normal>
        <Card elevation={0} style={{ background: 'transparent' }}>
          <CardContent>
            <Typography variant="h2" className={classes.titleCenter}>
              About me
            </Typography>
            <Avatar
              alt="Mahady Manana"
              src="/manana.png"
              style={{ margin: 'auto', width: 60, height: 60 }}
            />
            <div style={{ textAlign: 'center' }}>**********</div>
            <Typography component="p" style={{ textAlign: 'center' }}>
              Mahady Manana (Randriamahady Manana).
              <br />
              Malagasy Javascript/Typescript Developer with Nodejs,
              Reactjs and the powerful NoSQL Database MongoDB!
              <br />
              Building a modern UI/UX with React is my prefered jobs
              that why I work as a React Developer in most of my past
              works. I also build a Backend API and server-side
              functionnality with Nodejs (Express).
              <br />
              During my career, I help Teach Team, Organisation,
              Company and Individual Developer to accomplish their
              project and provide technical support. Mahady Manana
              keep learning new things and building small library to
              help speed development as I am Techno Lover.
            </Typography>
          </CardContent>
        </Card>
      </CustomContainer>
    </div>
  );
};
