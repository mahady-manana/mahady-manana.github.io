import {
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { CustomContainer } from '../../../templates';
import { theme } from '../../../theme';
import { useStyles } from './style';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LockIcon from '@material-ui/icons/Lock';
import WorldWeb from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
export const Presentation = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CustomContainer normal>
        <Card elevation={2}>
          <CardContent>
            <Typography variant="h2" className={classes.titleCenter}>
              About me
            </Typography>
            <div style={{ textAlign: 'center' }}>**********</div>
            <Typography component="p" style={{ textAlign: 'center' }}>
              Mahady Manana (Randriamahady Manana).
              <br /> I started as a Frontend Developer and later
              become a Fullstack in Javascript with Nodejs, Reactjs
              and the powerful NoSQL Database MongoDB!
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
      <CustomContainer normal spacing="normal">
        <Typography
          variant="h2"
          color="primary"
          className={classes.titleCenter}
        >
          What I can{' '}
          <span style={{ color: theme.palette.secondary.main }}>
            do for you?
          </span>
        </Typography>
        <div style={{ textAlign: 'center', margin: '30px 0' }}>
          <span>**********</span>
          <Typography>
            As a FullStack Javascript Developer, I will happy to give
            you these services :
          </Typography>
        </div>
        <Grid container xs>
          <Grid item xs={6}>
            <Card elevation={2} className={classes.cardWithBg}>
              <CardContent>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText>
                      Custom dashbord management application
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <LockIcon />
                    </ListItemIcon>
                    <ListItemText>
                      Internal services application
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <WorldWeb />
                    </ListItemIcon>
                    <ListItemText>
                      Modern website for Company, Organisation,...
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText>
                      Maintain and Customize existing application
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <LaptopMacIcon />
                    </ListItemIcon>
                    <ListItemText>
                      And your desired website & services
                    </ListItemText>
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={6}
            alignItems="center"
            style={{ display: 'flex' }}
          >
            <Card elevation={0} style={{ background: 'none' }}>
              <CardContent>
                <Typography>
                  A web developer is not closed in a specific task.
                  Its primary tasks is to provide a flexible solution,
                  end-to-end services, well-defined roadmap... to
                  their actual works.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CustomContainer>
    </div>
  );
};
