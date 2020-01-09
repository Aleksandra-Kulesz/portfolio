import React, {Component, useState} from 'react';

const Contact = (props) => {
    const [isClicked, setClick] = useState(false);

    const copyToClipboardPhone = (event) => {
        document.getElementById('phone').select();
        document.execCommand('copy')

    };

    const copyToClipboardMail = (event) => {
        document.getElementById('mail').select();
        document.execCommand('copy')

    };

    if (!isClicked) {
        return (
            <section className='contact_closed' onClick={() => setClick(!isClicked)}>
                <i className="fas fa-mobile"/>
            </section>
        )
    } else {
        return (
            <section className='contact_opened' onClick={() => setClick(!isClicked)}>
                <div className="phone" onClick={event => copyToClipboardPhone(event)}>
                    <i className="fas fa-mobile"/>
                    <input className='phone_input' type='text' id='phone' value='+48 511 535 939'/>
                </div>
                <div className="mail" onClick={event => copyToClipboardMail(event)}>
                    <i className="fas fa-at" data-copy='olina.kulesz@gmail.com'/>
                    <input className='mail_input' type='text' id='mail' value='olina.kulesz@gmail.com'/>
                </div>
                <div className="github"><a href='https://github.com/Aleksandra-Kulesz' target='_blank'><i
                    className="fab fa-github"/></a></div>
                <div className="linked"><a href='https://www.linkedin.com/in/aleksandra-kulesz-a26655182/'
                                           target='_blank'><i className="fab fa-linkedin-in"/></a></div>
            </section>
        )
    }
};

export {Contact};