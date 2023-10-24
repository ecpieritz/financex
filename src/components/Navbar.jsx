import React from 'react'

function Navbar() {
  return (
    <nav className='fx-navbar'>
      <div className="container-fluid">
      <a className='fx-navbar__logo' href="/">FinanceX</a>
      <div className="fx-navbar__links">
        <a className='fx-link' href="#about">About</a>
        <a className='fx-link' href="#benefits">Benefits</a>
        <a className='fx-link' href="#services">Services</a>
        <a className='fx-link' href="#customers">Customers</a>
        <a className='fx-link' href="#contact">Contact</a>
      </div>
      </div>
    </nav>
  )
}

export default Navbar
