import React from 'react';
import Homepage from '../Homepage/Homepage';
import Nav from '../../components/Commons/Nav/Nav';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <header className="app__header">
        <Nav/>
      </header>
      <main className="app__main">
        <Homepage/>
      </main>
      <footer className="app__footer">

      </footer>
    </div>
  );
}

export default App;
