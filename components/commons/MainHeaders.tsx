import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { CustomContainer } from '../templates';
import HeadTags from './head';
import { useStyles } from './style';
import Link from 'next/link';
import { TopRight } from './topRight';

export default function MainHeaders({ title, description }) {
  const classes = useStyles();
  return (
    <>
      <HeadTags title={title} description={description} />
      <header className="header" id="main-header">
        <CustomContainer normal>
          <Grid
            container
            justify="space-between"
            className={classes.customContainer}
          >
            <Grid item>
              <Link href="/">
                <a>
                  <Typography
                    component="h1"
                    className={classes.logoTitle}
                  >
                    Mahady Manana
                  </Typography>
                  <Typography
                    variant="caption"
                    className={classes.captionLogo}
                  >
                    Javascript Developer
                  </Typography>
                </a>
              </Link>
            </Grid>
            <Grid item style={{ width: '65%' }}>
              <TopRight />
            </Grid>
          </Grid>
        </CustomContainer>
      </header>
    </>
  );
}
