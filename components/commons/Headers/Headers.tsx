import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { useStyles } from "./style";

export const Headers = () => {
  const classes = useStyles()
  return (
    <>
    <header>
      <Container>
      <Grid container justify="space-between">
        <Grid item>
          <Typography className={classes.logoTitle} component="h1">Mahady <span color="secondary">Manana</span></Typography>
        </Grid>
        <Grid item>Contact</Grid>
      </Grid>
      </Container>
    </header>
    </>
  )
}