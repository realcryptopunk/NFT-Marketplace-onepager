import React from 'react';
import Header from './Components/Header';
import Features from './Components/Features';
import Metaverse from './Components/Metaverse';
import Marketplace from './Components/Marketplace';
import Waitlist from './Components/Waitlist';



function App() {
  return (
    <div className="App">
      <Header/>
      <div className='f-heading'>
        <h1>Features</h1>
      </div>
      <Features/>
      <Metaverse/>
      <Marketplace/>
      <Waitlist/>
    </div>
  );
}

export default App;
