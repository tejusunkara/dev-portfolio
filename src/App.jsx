import React from 'react'
import './App.css'
import Intro from './components/Intro.jsx';
import Portfolio from './components/Portfolio.jsx';
import Timeline from './components/Timeline.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <div className="App">
      <div className='max-w-5xl w-11/12 mx-auto'>
        <Intro />
        <Portfolio />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
