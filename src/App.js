import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from './header/header';
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </div>
    )

  }
}

export default App;
