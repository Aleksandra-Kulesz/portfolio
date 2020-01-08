import React, {Component, useState} from 'react';

const Contact = (props) => {
    const [isClicked, setClick] = useState(false);

   const handleCopy = () => {
    document.execCommand('copy')
    };

    if (!isClicked) {
        return (
            <section className='contact' onClick={()=>setClick(!isClicked)}>
                <i className="fas fa-mobile"/>
            </section>
        )
    } else {
        return (
            <section className='contact' onClick={()=>setClick(!isClicked)}>
                <button className="phone" onClick={handleCopy}><i className="fas fa-mobile"/><span>+48 511 535 939</span></button>
                <div className="mail"><i className="fas fa-at"/></div>
                <div className="github"><a href='https://github.com/Aleksandra-Kulesz' target='_blank'><i className="fab fa-github"/></a></div>
                <div className="linked"><a href='https://www.linkedin.com/in/aleksandra-kulesz-a26655182/' target='_blank'><i className="fab fa-linkedin-in"/></a></div>
            </section>
        )
    }
};

export {Contact};