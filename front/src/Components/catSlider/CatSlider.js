import React from "react";
import "./catSlider.css";
import Slider from "react-slick";

const CatSlider = () => {
  var settings = {
    dots: false,
    isFinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 2,
    fade: false,
    arrows: true,
  };

  return (
    <div className="catSliderSection">
      <div className="continer-fluid">
        <h2 className="hd">Featured Categories</h2>
        <Slider {...settings} className="cat_slider_Main">
          <div className="item">
            <div className="info">
              <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-11.png"></img>
              <h5>Peach</h5>
              <p>9 item</p>
            </div>  
          </div>
          
          <div className="item">
            <div className="info">
              <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-9.png"></img>
              <h5>Red Apple</h5>
              <p>6 item</p>
            </div>  
          </div>
          
          <div className="item">
            <div className="info">
              <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-12.png"></img>
              <h5>Kiwi</h5>
              <p>6 item</p>
            </div>  
          </div>
          
          <div className="item">
            <div className="info">
              <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-13.png"></img>
              <h5>Burger</h5>
              <p>11 item</p>
            </div>  
          </div>
          
          <div className="item">
            <div className="info">
              <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-3.png"></img>
              <h5>Snacks</h5>
              <p>15 item</p>
            </div>  
          </div>
          
          <div className="item">
            <div className="info">
              <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-1.png"></img>
              <h5>Vegetables</h5>
              <p>13 item</p>
            </div>  
          </div>
          
          <div className="item">
            <div className="info">
              <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-2.png"></img>
              <h5>StrawBerry</h5>
              <p>6 item</p>
            </div>  
          </div>
          
          <div className="item">
            <div className="info">
              <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-4.png"></img>
              <h5>Black plum</h5>
              <p>4 item</p>
            </div>  
          </div>
          
          <div className="item">
            <div className="info">
              <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-14.png"></img>
              <h5>Coffe and Tea</h5>
              <p>7 item</p>
            </div>  
          </div>
          
          <div className="item">
            <div className="info">
              <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-5.png"></img>
              <h5>Custard apple</h5>
              <p>5 item</p>
            </div>  
          </div>
          
          <div className="item">
            <div className="info">
              <img src="https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/05/cat-15.png"></img>
              <h5>Headphones</h5>
              <p>3 item</p>
            </div>  
          </div>
          
        </Slider>
      </div>
    </div>
  );
};

export default CatSlider;
