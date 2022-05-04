import React from 'react';
import Homepage from '../Homepage/Homepage';
import Aboutproduct from '../../components/Aboutproduct/Aboutproduct';
import Nav from '../../components/Commons/Nav/Nav';
import EditOrAddProduct from '../../components/EditOrAddProduct/EditOrAddProduct';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

const App = () => {

  const location = useLocation();

  return (
    
      <div className="app">
        <header className="app__header">
          <Nav/>
        </header>
        <main className="app__main">
          <TransitionGroup component={null}>
            <CSSTransition key={location.key} classNames="fade" timeout={800}>
              <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='/products/:productId' element={<Aboutproduct/>} />
                <Route path='/products/:productId/edit' element={<EditOrAddProduct type='update' nameButton='Update' icon='pi pi-pencil'/>} />
                <Route path='/products/create' element={<EditOrAddProduct type='create' nameButton='Add a new product' icon='pi pi-plus'/>} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        </main>
        <footer className="app__footer">

        </footer>
      </div> 
    
  );
}

export default App;
