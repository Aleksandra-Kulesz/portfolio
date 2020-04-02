import React, { Component } from "react";
import Slider from "react-slick";
import page1 from "../Assets/page1.png";
import page2 from "../Assets/page2.png";
import page3 from "../Assets/page3.png";
import page4 from "../Assets/page4.png";

export default class VerticalSwipeToSlide extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
      }
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <a href="http://dmka.allan690.usermd.net" target={"blank"}>
              <img
                alt="Shopper website - a CodersLab final project"
                src={page1}
              />
            </a>
          </div>
          <div>
            <a href="http://magda.allan690.usermd.net/" target={"blank"}>
              <img alt="Magdalena Borkowska company's website" src={page2} />
            </a>
          </div>
          <div>
            <a href="http://olina.allan690.usermd.net/" target={"blank"}>
              <img alt="BestShop website - a CodersLab exercise" src={page3} />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/Aleksandra-Kulesz/shopper"
              target={"blank"}
            >
              <img
                alt="Shopper website - a CodersLab final project"
                src={page4}
              />
            </a>
          </div>
        </Slider>
      </div>
    );
  }
}
