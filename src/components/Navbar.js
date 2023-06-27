import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import logo2 from './logo2.png'

function Navbar() {
  return (
    <header>
        <div className="heading"><img src={logo2} /></div>
        <div className='log-sign'>
            <Link smooth to="/#homepage" style={{ textDecoration: 'none' }}>
              <button className='log'>HOME</button>
            </Link>
            <Link smooth to="/#about" style={{ textDecoration: 'none' }}>
              <button className='log'>ABOUT</button>
            </Link>
            <Link smooth to="/#contact" style={{ textDecoration: 'none' }}>
              <button className='log'>CONTACT</button>
            </Link>
        </div>
    </header>
  )
}

export default Navbar