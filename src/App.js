import React from 'react';
import './App.css';

import { About, Contact, Header, Skills, Projects, Footer } from './container';
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
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
