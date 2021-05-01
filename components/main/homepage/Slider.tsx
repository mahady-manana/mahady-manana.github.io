import { Typography } from '@material-ui/core';
import { Slider, SliderItem } from '@sitym/future-slider';
import { useStyles } from './style';
import { Presentation } from './SlideItem1';
import { ListSkills } from './ListSkills';
export const CustomSlider = () => {
  const classes = useStyles();
  return (
    <Slider height="100vh">
      <SliderItem className={classes.slider1} content="center">
        <div>
          <Presentation />
          <div>
            <ListSkills />
          </div>
        </div>
      </SliderItem>
      <SliderItem className={classes.slider2} content="center">
        <div>
          <Typography variant="h2">SiTYM</Typography>
          <Typography variant="h4">
            Expore my open source project
          </Typography>
        </div>
      </SliderItem>
    </Slider>
  );
};
