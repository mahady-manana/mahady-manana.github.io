import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        logoTitle: {
            fontSize: 26,
            color: theme.palette.primary.main
        }
    }
) )