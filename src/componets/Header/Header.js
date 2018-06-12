import React, { Component } from 'react';
import './Header.sass';

class Header extends Component {
    render() {
        return (
            <div className='ketty'>
                <div className='ketty__logo' />
                <nav className='ketty__navigation'>
                    <div className="ketty__navigationLink">Home</div>
                    <div className="ketty__navigationLink">Works</div>
                    <div className="ketty__navigationLink">About us</div>
                    <div className="ketty__navigationLink">Contacts</div>
                </nav>
            </div>
        );
    }
}

export default Header;
