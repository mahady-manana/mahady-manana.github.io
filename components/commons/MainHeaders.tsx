import HeadTags from "./head";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useStyles } from "./style_mainheader";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import { ListItemText } from "@material-ui/core";
import Link from "next/link";

function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
	return <ListItem button component='a' {...props} />;
}
export default function MainHeaders({ title, description }) {
	const classes = useStyles();
	return (
		<>
			<HeadTags title={title} description={description} />
			<div className='header' id='main-header'>
				<AppBar color='primary'>
					<Toolbar>
						<div className='logo-container'>Hello</div>
						<div className='desktop-menu'>
							<ul>
								<li className={classes.menuList}>
									<Link href='/'>
										<a>Home testes</a>
									</Link>
								</li>
								<li className={classes.menuList}>
									<Link href='/services'>
										<a>Services</a>
									</Link>
								</li>
								<li className={classes.classesTest}>
									<Link href='/services'>
										<a>Test</a>
									</Link>
								</li>
							</ul>
						</div>
					</Toolbar>
				</AppBar>
			</div>
		</>
	);
}
