import React, { Component } from 'react';
import './Header.styl';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      buttonMenu: null,
    }
  }

  pushButtonMenu = event => {
    this.setState({buttonMenu: event.target.name})
  };

    render() {
    return (
      <div className='ketty__header'>
        <div className='ketty__logo' />
          <nav className='ketty__navigation'>
              <button
                className={this.state.buttonMenu === "Home" ? "ketty__navigationLink _show":"ketty__navigationLink"}
                onClick={this.pushButtonMenu}
                name="Home"
              >Home
              </button>
              <button
                className={this.state.buttonMenu === "Works" ? "ketty__navigationLink _show":"ketty__navigationLink"}
                onClick={this.pushButtonMenu}
                name="Works"
              >Works
              </button>
              <button
                className={this.state.buttonMenu === "AboutUs" ? "ketty__navigationLink _show":"ketty__navigationLink"}
                onClick={this.pushButtonMenu}
                name="AboutUs"
              >About us
              </button>
              <button
                className={this.state.buttonMenu === "Contacts" ? "ketty__navigationLink _show":"ketty__navigationLink"}
                onClick={this.pushButtonMenu}
                name="Contacts"
              >Contacts
              </button>
          </nav>
      </div>
    );
  }
}

export default Header;
