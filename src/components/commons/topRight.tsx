import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TuneIcon from "@material-ui/icons/Tune";
import Link from "@material-ui/core/Link";
import { useStyles } from "./style";
export const TopRight = () => {
	const classes = useStyles();
	return (
		<List
			component='div'
			style={{ display: "flex" }}
			className={classes.listRoot}
		>
			<Link href='#'>
				<ListItem component='div' className={classes.listItemMenu}>
					<ListItemIcon>
						<TuneIcon />
					</ListItemIcon>
					<ListItemText primary='SiTYM' />
				</ListItem>
			</Link>
			<Link href='#'>
				<ListItem component='div' className={classes.listItemMenu}>
					<ListItemIcon>
						<TuneIcon />
					</ListItemIcon>
					<ListItemText primary='Services' />
				</ListItem>
			</Link>
			<Link href='#'>
				<ListItem component='div' className={classes.listItemMenu}>
					<ListItemIcon>
						<TuneIcon />
					</ListItemIcon>
					<ListItemText primary='Linkedin' />
				</ListItem>
			</Link>
			<Link href='#'>
				<ListItem component='div' className={classes.listItemMenu}>
					<ListItemIcon>
						<TuneIcon />
					</ListItemIcon>
					<ListItemText primary='Github' />
				</ListItem>
			</Link>
		</List>
	);
};
