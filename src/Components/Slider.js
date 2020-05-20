import React, { Component } from "react";
import Slider from "react-slick";
import page1 from "./../Assets/page1.png";
import page2 from "./../Assets/page2.png";
import page3 from "./../Assets/page3.png";
import page4 from "./../Assets/page4.png";
import page5 from "./../Assets/page5.png";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
    };
    return (
      <Slider className="slider_container" {...settings}>
        <div>
          <a href="http://dmka-light.allan690.usermd.net" target="blank">
            <img
              alt="DMKA's page light version"
              src={page5}
            />
          </a>
        </div>
        <div>
          <a href="http://dmka.allan690.usermd.net" target="blank">
            <img
              alt="DMKA's page dark version"
              src={page1}
            />
          </a>
        </div>
        <div>
          <a href="http://magda.allan690.usermd.net/" target="blank">
            <img alt="Magdalena Borkowska company's website" src={page2} />
          </a>
        </div>
        <div>
          <a href="http://olina.allan690.usermd.net/" target="blank">
            <img alt="BestShop website - a CodersLab exercise" src={page3} />
          </a>
        </div>
        <div>
          <a href="https://github.com/Aleksandra-Kulesz/shopper" target="blank">
            <img
              alt="Shopper website - a CodersLab final project"
              src={page4}
            />
          </a>
        </div>
      </Slider>
    );
  }
}

export { SimpleSlider };
