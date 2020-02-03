import React, { Component } from 'react';
import Sidebar from './components/sidebar';
import Introduction from './components/introduction';
import About from './components/about';
import Projects from './components/projects.jsx';
import './App.css';


class App extends Component {
  render() {
    return (
    <div id="colorlib-page" className="App">
      <div id="container-wrap"> 
        <Sidebar />
        <div id="colorlib-main">
          <Introduction />
          <About />
          <Projects />
        </div>
      </div>
    </div>
    );
  }
}

export default App;
