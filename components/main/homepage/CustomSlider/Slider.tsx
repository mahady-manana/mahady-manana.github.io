import { Slider, SliderItem } from '@sitym/future-slider';
import { useStyles } from './style';
import { Presentation } from './SlideItem1';
import { ListSkills } from './ListSkills';
import { PresentationSitym } from './SliderItem2Sitym';
import { SitymProject } from './SitymProject';
export const CustomSlider = () => {
  const classes = useStyles();
  return (
    <Slider height="100%">
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
          <PresentationSitym />
          <SitymProject />
        </div>
      </SliderItem>
    </Slider>
  );
};
