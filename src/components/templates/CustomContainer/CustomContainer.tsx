import React, { FC } from 'react';
import { useStyles } from './style';
interface CustomContainerProps {
  normal?: boolean;
  fullWidth?: boolean;
  spacing?: 'normal' | 'large' | 'small';
  className?: string;
}
export const CustomContainer: FC<CustomContainerProps> = ({
  children,
  normal,
  fullWidth,
  spacing,
  className,
}) => {
  const classes = useStyles();
  const customClasses = fullWidth
    ? classes.fullWidth
    : normal
    ? classes.normal
    : '';
  const spacingClass =
    spacing === 'normal'
      ? classes.spacing2
      : spacing === 'large'
      ? classes.spacing3
      : spacing === 'small'
      ? classes.spacing1
      : undefined;
  return (
    <div
      className={`${classes.container} ${spacingClass || ''} ${
        className || ''
      }`}
    >
      <div className={customClasses}>{children}</div>
    </div>
  );
};
