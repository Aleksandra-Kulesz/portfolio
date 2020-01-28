import React, {Component, useState} from 'react';
import jquery from './../Assets/jquery.png';
import {SimpleSlider} from "./Slider";
import VerticalSwipeToSlide from "./MobileSlider";

const Portfolio = (props) => {
    const [isClicked, setClick] = useState(true);

    if (isClicked) {
        return (
            <section className='menu' onClick={() => setClick(!isClicked)}>
                <div className='dot'/>
                <div className='dot'/>
                <div className='dot'/>
            </section>
        )
    } else {
        return (
            <section className="portfolio">
                <div className="portfolio_technologies">
                    <div className="portfolio_close" onClick={() => setClick(!isClicked)}>
                        <i className="far fa-times-circle"/>
                    </div>
                    <h4>Technologies</h4>
                    <div className="portfolio_technologies__icons">
                        <i className="fab fa-html5"/>
                        <i className="fab fa-css3-alt"/>
                        <i className="fab fa-js-square"/>
                        <i className="fab fa-sass"/>
                        <i className="fab fa-gulp"/>
                        <i className="fab fa-react"/>
                        <i className="fab fa-git"/>
                        <img className='jquery' src={jquery} alt="jQuery icon"/>
                    </div>
                </div>
                <div className="portfolio__realisations">
                    <h4>Realisations</h4>
                    {window.innerWidth<1000?<VerticalSwipeToSlide/>:<SimpleSlider/>}
                </div>
            </section>
        )
    }
};

export {Portfolio};