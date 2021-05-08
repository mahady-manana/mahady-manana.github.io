import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { CustomContainer } from "../templates";
import { useStyles } from "./style";
import Link from "@material-ui/core/Link";
import { TopRight } from "./topRight";
import { MobileMenu } from "./MenuMobile";

export default function MainHeaders() {
	const classes = useStyles();
	return (
		<>
			<header className={classes.mainHeader} id='main-header'>
				<CustomContainer normal>
					<Grid
						container
						justify='space-between'
						className={classes.mobile}
						alignItems='center'
					>
						<Grid item className={classes.logoGrid}>
							<Link href='#'>
								<Typography variant='h1' className={classes.logoTitle}>
									Mahady Manana
								</Typography>
								<Typography variant='caption' className={classes.captionLogo}>
									Javascript Developer
								</Typography>
							</Link>
						</Grid>
						<Grid item className={classes.gridRight}>
							<TopRight />
							<MobileMenu />
						</Grid>
					</Grid>
				</CustomContainer>
			</header>
		</>
	);
}
