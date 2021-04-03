import React from 'react'
import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Icon from './Components/Icon';
import Main from './Components/Main'
import Portfolio from './Components/Portfolio';
import Skill from './Components/Skill'
import Testimonials from './Components/Testimonials';

function App() {
  return (
      <div className="app">
        <Header/>
        <Main />
        <About />
        <div className="c">
          <Skill />
          <Portfolio />
          <Testimonials />
          <Icon />
        </div>
        <Footer />
      </div>
  );
}

export default App;
