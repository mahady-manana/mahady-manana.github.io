import { FC } from 'react';
import { useStyles } from './style';
interface CustomContainerProps {
  normal?: boolean;
  fullWidth?: boolean;
}
export const CustomContainer: FC<CustomContainerProps> = ({
  children,
  normal,
  fullWidth,
}) => {
  const classes = useStyles();
  const customClasses = fullWidth
    ? classes.fullWidth
    : normal
    ? classes.normal
    : '';
  return (
    <div className={classes.container}>
      <div className={customClasses}>{children}</div>
    </div>
  );
};
