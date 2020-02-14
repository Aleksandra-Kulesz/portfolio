import React, {Component} from 'react';
import splash1 from './../Assets/splash1.png'
import splash2 from './../Assets/splash2.png'
import splash3 from './../Assets/splash3.png'
import splash4 from './../Assets/splash4.png'
import splash5 from './../Assets/splash5.png'
import splash6 from './../Assets/splash6.png'
import splash7 from './../Assets/splash7.png'
import splash8 from './../Assets/splash8.png'
import splash9 from './../Assets/splash9.png'
import splash10 from './../Assets/splash10.png'

import splash1Mobile from './../Assets/splash1-mobile.png'
import splash2Mobile from './../Assets/splash2-mobile.png'
import splash3Mobile from './../Assets/splash3-mobile.png'
import splash4Mobile from './../Assets/splash4-mobile.png'
import splash5Mobile from './../Assets/splash5-mobile.png'
import splash6Mobile from './../Assets/splash6-mobile.png'
import splash7Mobile from './../Assets/splash7-mobile.png'
import splash8Mobile from './../Assets/splash8-mobile.png'
import splash9Mobile from './../Assets/splash9-mobile.png'
import splash10Mobile from './../Assets/splash10-mobile.png'

const Main = (props) => {

    if(window.innerWidth>750) {
        return (
            <main>
                <h1>Aleksandra Kulesz</h1>
                <h2>Front-end Developer</h2>
                <img className='splash1' alt='rose pink watercolor splash' src={splash1}/>
                <img className='splash2' alt='yellowish green watercolor splash' src={splash2}/>
                <img className='splash3' alt='aquamarine watercolor splash' src={splash3}/>
                <img className='splash4' alt='yellow watercolor splash' src={splash4}/>
                <img className='splash5' alt='purple watercolor splash' src={splash5}/>
                <img className='splash6' alt='orange and pink watercolor splash' src={splash6}/>
                <img className='splash7' alt='lavender watercolor splash' src={splash7}/>
                <img className='splash8' alt='pearly pink watercolor splash' src={splash8}/>
                <img className='splash9' alt='pale blue watercolor splash' src={splash9}/>
                <img className='splash10' alt='green watercolor splash' src={splash10}/>
            </main>
        )
    }
        return (
            <main>
                <h1>Aleksandra Kulesz</h1>
                <h2>Front-end Developer</h2>
                <img className='splash1' alt='rose pink watercolor splash' src={splash1Mobile}/>
                <img className='splash2' alt='yellowish green watercolor splash' src={splash2Mobile}/>
                <img className='splash3' alt='aquamarine watercolor splash' src={splash3Mobile}/>
                <img className='splash4' alt='yellow watercolor splash' src={splash4Mobile}/>
                <img className='splash5' alt='purple watercolor splash' src={splash5Mobile}/>
                <img className='splash6' alt='orange and pink watercolor splash' src={splash6Mobile}/>
                <img className='splash7' alt='lavender watercolor splash' src={splash7Mobile}/>
                <img className='splash8' alt='pearly pink watercolor splash' src={splash8Mobile}/>
                <img className='splash9' alt='pale blue watercolor splash' src={splash9Mobile}/>
                <img className='splash10' alt='green watercolor splash' src={splash10Mobile}/>
            </main>
        )
};

export {Main};