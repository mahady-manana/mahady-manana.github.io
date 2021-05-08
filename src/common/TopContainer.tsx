import React, { FC } from "react";
import MainHeaders from "../components/commons/MainHeaders";
import "./style.css";
interface TopContainerProps {
	title?: string;
}
export const TopContainer: FC<TopContainerProps> = ({ children }) => {
	return (
		<div className='app'>
			<MainHeaders />
			<div>{children}</div>
		</div>
	);
};
