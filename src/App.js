import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Hello from './components/Hello';
import BoxA from './components/BoxA';
// import BoxB from './components/BoxB';
import Contact_item from './components/Contact_title';


function App() {
  const name = 'Otis';
  
  return (
    <div className='container'>
        {/* <Header/>  */}
        {/* <Hello /> */}
        <BoxA />
        <Hello />
        {/* <Contact_item /> */}
    </div>
  );
}

export default App;
