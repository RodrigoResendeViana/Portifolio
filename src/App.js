import React from 'react';
import './App.css';

import { About, Footer, Header, Skills, Projects } from './container';
import { Navbar } from './components';


function App() {
  return (
    <div className="app">
      <div className='linear__bg'>
        <Navbar/>
        <Header/>
      </div>
      <About/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
