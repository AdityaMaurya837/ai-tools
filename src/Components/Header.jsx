import React from 'react'
import { BsPersonCircle, BsSearch, BsJustify }
  from 'react-icons/bs'

function Header({ OpenSidebar }) {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="search-bar">
        <BsSearch className="icon" />
        <input type="search" placeholder="Search Tool" />
      </div>
      <div className="header-right">
        <BsPersonCircle className="icon" />
      </div>
    </header>
  )
}

export default Header