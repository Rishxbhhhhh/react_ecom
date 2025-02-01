import React from "react";
import Slider from "react-slick";
import "./index.css";
import SliderOne from "../../../Assests/images/slider-5-min.png";
import SliderTwo from "../../../Assests/images/slider-6-min.png";
import { Button } from "@mui/material";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const HomeSlider = () => {
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
  };

  return (
    <section className="homeSlider">
      <div className="container-fluid" style={{ width: "97%", whiteSpace:'nowrap' }}>
        <Slider {...settings} className="home_slider_Main">
          <div className="item">
            <img className="img" src={SliderOne}></img>

            <div className="info">
              <h1 className="mb-4 header1">
                Fresh Vegetables
                <br />
                Big discount  
              </h1>
              <p>Sign up for the daily newsletter</p>
            </div>
          </div>
          
          <div className="item">
            <img className="img" src={SliderTwo}></img>
            <div className="info">
              <h1 className="mb-4">
                Don't miss amazing
                <br />
                grocery deals
              </h1>
              <p>Sign up for the daily newsletter</p>
            </div>
          </div>
        </Slider>
        <div className="newsLetterBanner">
          <SendOutlinedIcon/>
          <input type="text" placeholder="Your email address"></input>
          <Button>Subscribe</Button>
        </div>

      </div>
    </section>
  );
};

export default HomeSlider;
