import React, { useState, useEffect } from 'react'
import { Link } from "gatsby"

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('work')
  const [activeWork, setActiveWork] = useState('')
  const [homeHeight, setHeight] = useState('100vh')
  const [homeLeft, setLeft] = useState('28.5%')
  const [animateTrigger, setTrigger] = useState(1)

  const tabClick = (e, name) => {
    setActiveTab(name)
    // setLeft('60%')
    // setHeight('20vh')
    // setTrigger(animateTrigger + 1)
    // e.target.classList.toggle('active')
    // activeTab == 'work' ? setActiveWork('tcs') : setActiveWork('')
    activeTab == 'about' || 'contact' ? setActiveWork('') : setActiveWork('tcs')
  }

  return (
    <nav className="nav-wrap">
      <Link 
        to="/"
        className={ activeTab == 'work' ? 'active navbar-item' : 'navbar-item' } 
        onClick={(e) => tabClick(e, 'work')}
      >
        Selected Work
      </Link>
      <Link 
        className="navbar-item" 
        to="/about"
        className={ activeTab == 'about' ? 'active navbar-item' : 'navbar-item' }
        // onClick={(e) => tabClick(e, 'about')}
      >
        About
      </Link>
      <Link 
        className="navbar-item" 
        to="/contact"
        className={ activeTab == 'about' ? 'active navbar-item' : 'navbar-item' }
        // onClick={(e) => tabClick(e, 'about')}
      >
        Contact
      </Link>
    </nav>
  )
}

export default Navbar
