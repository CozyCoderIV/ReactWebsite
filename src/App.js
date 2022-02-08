import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Hello from './components/Hello';

function App() {
  const name = 'Otis';
  
  return (
    <div className='container'>
        {/* <Header/>  */}
        <Hello />
    </div>
  );
}

export default App;
