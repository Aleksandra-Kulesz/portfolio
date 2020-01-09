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
const Main = (props) => {
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
};

export {Main};