import React, { Component } from "react";
import Slider from "react-slick";
import page1 from "../Assets/page1.png";
import page2 from "../Assets/page2.png";
import page3 from "../Assets/page3.png";

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
                        <a href="https://github.com/Aleksandra-Kulesz/shopper" target='blank'><img src={page1}/></a>
                    </div>
                    <div>
                        <a href="http://magda.allan690.usermd.net/" target='blank'><img src={page2}/></a>
                    </div>
                    <div>
                        <a href="https://github.com/Aleksandra-Kulesz/CL" target='blank'><img src={page3}/></a>
                    </div>
                </Slider>
            </div>
        );
    }
}