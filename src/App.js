import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from './header/header';
import Projects from './projects/projects';
import Skills from './skills/skills';
import About from './about/about';
import Footer from './footer/footer.js'
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <About />
          <Projects />
          <Skills />
          <Footer />
        </BrowserRouter>
      </div>
    )

  }
}

export default App;
