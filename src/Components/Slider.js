import React, {Component} from "react";
import Slider from "react-slick";
import page1 from './../Assets/page1.png'
import page2 from './../Assets/page2.png'
import page3 from './../Assets/page3.png'

class SimpleSlider extends React.Component {
    render() {
        var settings = {
            dots: true
        };
        return (
                <Slider className="slider_container" {...settings}>
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
        );
    }
}

export {SimpleSlider};