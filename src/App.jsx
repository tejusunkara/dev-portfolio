import React from 'react'
import './App.css'
import Intro from './components/Intro.jsx';
// import Footer from './components/Footer.jsx';
import Portfolio from './components/Portfolio.jsx';
// import Contact from './components/Contact.jsx';
// import Timeline from './components/Timeline.jsx';

function App() {

  return (
    <div className="App">
      <div className='max-w-5xl w-11/12 mx-auto'>
        <Intro />
        <Portfolio />
        {/* <Timeline /> */}
        {/* <Contact /> */}
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default App
