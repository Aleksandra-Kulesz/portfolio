import React from 'react';
import './App.scss';
import {Contact} from "./Components/Contact";
import {Main} from "./Components/Main";
import {Portfolio} from "./Components/Portfolio";

function App() {
    return (
        <container>
          <Contact/>
          <Main/>
          <Portfolio/>
        </container>
    );
}

export default App;
