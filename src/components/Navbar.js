import React, { useState, useEffect } from 'react'
import { Link } from "gatsby"
import { useStateValue } from '../components/State'

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('work')
  const [{ homeHeight }, dispatch] = useStateValue()

  const tabClick = (e, name) => {
    setActiveTab(name)
    dispatch({
      type: 'changeHeight',
      newHeight: { height: '20vh'}
    })
    // setLeft('60%')
    // setHeight('20vh')
    // setTrigger(animateTrigger + 1)
    // e.target.classList.toggle('active')
    // activeTab == 'work' ? setActiveWork('tcs') : setActiveWork('')
    // activeTab == 'about' || 'contact' ? setActiveWork('') : setActiveWork('tcs')
  }

    // console.log(homeHeight)

  return (
    <nav className="nav-wrap" id="work-selector">
      <Link 
        to="/"
        className="navbar-item" 
        activeClassName='active'
        // className={ activeTab == 'work' ? 'active navbar-item' : 'navbar-item' } 
        onClick={(e) => tabClick(e, 'work')}
      >
        Selected Work
      </Link>
      <Link 
        className="navbar-item" 
        to="/about"
        activeClassName='active'
        // className={ activeTab == 'about' ? 'active navbar-item' : 'navbar-item' }
        onClick={(e) => tabClick(e, 'about')}
      >
        About
      </Link>
      <Link 
        className="navbar-item" 
        to="/contact"
        activeClassName='active'
        // className={ activeTab == 'about' ? 'active navbar-item' : 'navbar-item' }
        onClick={(e) => tabClick(e, 'about')}
      >
        Contact
      </Link>
    </nav>
  )
}

export default Navbar
