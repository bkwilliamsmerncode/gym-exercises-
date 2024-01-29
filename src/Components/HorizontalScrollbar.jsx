import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import { Box, Typography } from '@mui/material';
import { sliderSettings } from "../utils/common"
import { FaArrowLeftLong, FaArrowRightLong  } from "react-icons/fa6";
import "swiper/css"


import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
<Swiper {...sliderSettings}>
  <SliderButtons /> 
  <div className='horizontal' LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => (
      <SwiperSlide 
      
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
        
      >
      
        {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
       
      </SwiperSlide>
    ))}
  </div>
</Swiper>
 
);

export default HorizontalScrollbar;

const SliderButtons = () => {
  const swiper = useSwiper();
      return (
          <div className="rlbtn">
              <button onClick={() => swiper.slidePrev()} className='lbtn'><FaArrowLeftLong /></button>
              <button onClick={() => swiper.slideNext()} className='rbtn'><FaArrowRightLong /></button>
          </div>
      )
  }