import React from 'react'
import { useRef } from 'react'
import {BrowserRouter,Routes,Route,NavLink} from 'react-router-dom'
import {About} from '../components/About/About.jsx'
import {Dashboard} from '../components/dashboard/Dashboard.jsx'
import {Home} from '../components/home/Home.jsx'

import '../components/Header.css'

function Header() {
    const   navRef = useRef()
    return (
        <BrowserRouter>
        
            <header className='head'>
                <nav ref={navRef}>
                    <ul className='aa'>
                        <li><NavLink to={'/'}>
                            <h2>PRUEBA</h2>
                            </NavLink></li>
    
                        <li><NavLink to={'/About'}>
                            About
                            </NavLink></li>
    
                        <li><NavLink to={'/Dashboard'}>
                            Dashboard
                            </NavLink></li>
    
                        <li><NavLink to={'/Home'}>
                            Home
                            </NavLink></li>
                    </ul>
                </nav>
            </header>
    
            <Routes>
                <Route path='About' element={<About/>}></Route>
                <Route path='Dashboard' element={<Dashboard/>}></Route>
                <Route path='Home' element={<Home/>}></Route>
            </Routes>
    
        </BrowserRouter>
      )
    }
    
    export {Header}