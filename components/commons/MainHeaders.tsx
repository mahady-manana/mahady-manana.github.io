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
      <header className={classes.mainHeader} id="main-header">
        <CustomContainer normal>
          <Grid
            container
            justify="space-between"
            className={classes.mobile}
          >
            <Grid item className={classes.logoGrid}>
              <Link href="/">
                <a>
                  <Typography
                    variant="h1"
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
            <Grid item className={classes.gridRight}>
              <TopRight />
            </Grid>
          </Grid>
        </CustomContainer>
      </header>
    </>
  );
}
