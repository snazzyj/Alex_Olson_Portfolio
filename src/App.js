import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from './header/header';
import Projects from './projects/projects';
import Skills from './skills/skills';
import About from './about/about';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
    }
  }

  componentDidMount() {
    let mediaQuery = window.matchMedia('(max-width: 700px)');

    if(mediaQuery.matches) {
      this.setState({
        isMobile: true
      })
    }
  }

  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <Header isMobile={this.state.isMobile} />
          <About />
          <Projects />
          <Skills />
        </BrowserRouter>
      </div>
    )

  }
}

export default App;
