import React, { Component } from 'react';
import Home from '../Home/Home'
import Aboutus from '../AboutUs/AboutUs'
import Works from '../Works/Works'
import Contacts from '../Contacts/Contacts'
import './Main.styl';

class Main extends Component {
    render() {
        return (
            <div className="ketty__main">
                <Home />
                <Works />
                <Aboutus />
                <Contacts />
            </div>
        );
    }
}

export default Main;
