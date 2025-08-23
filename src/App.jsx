import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Index from './pages/index';
import About from './pages/about';
import Uses from './pages/uses';
import Menu from './components/menu';
import Project from './pages/project';
import './App.css'

function App() {

  return (
    <> 
      <BrowserRouter>
        <div className='w-full fixed z-50'>
          <Menu />
        </div>
        <Routes>
          <Route index element={<Index/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/uses' element={<Uses/>}/>
          <Route path='/project' element={<Project/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
