import React, { Component } from 'react';
import Header from './componets/Header/Header';
import Footer from './componets/Footer/Footer';
import Main from './componets/Main/Main';
import './App.styl';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
