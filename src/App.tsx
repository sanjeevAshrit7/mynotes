import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/footer';
import Home from './components/home';
import NavBar from './components/navBar';
import PeopleToFollow from './components/peopleToFollow';
import Preperation from './components/preperation';
import Preperations from './components/preperations';
import ToDos from './components/toDos';
import UniqueSolutions from './components/uniqueSolutions';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route element={<Home/>} path={'/'}/>
        <Route element={<Preperations/>} path={'/Preperations'}/>
        <Route element={<Preperation/>} path={'/Preperation/:slug'}/>
        <Route element={<UniqueSolutions/>} path={'/UniqueSolutions'}/>
        <Route element={<PeopleToFollow/>} path={'/PeopleToFollow'}/>
        <Route element={<ToDos/>} path={'/ToDos'}/>
      </Routes>
      <div className='max-w-full'>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App;
