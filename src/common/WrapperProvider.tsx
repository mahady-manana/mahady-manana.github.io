import React from "react";
import { TopContainer } from "./TopContainer";
import { theme } from "./theme";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
export const WrapperProvider = ({ element, props }) => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<TopContainer {...props}>{element}</TopContainer>
		</ThemeProvider>
	);
};
