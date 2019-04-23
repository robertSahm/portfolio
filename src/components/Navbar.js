import React from "react"
import { Link } from "gatsby"

const Navbar = class extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			showMenu: false,
      isOpen: false
		}
    this.dropDown = this.dropDown.bind(this)
	}

  dropDown = (e) => {
    console.log('clicked')
    e.target.classList.add('show')
    this.setState({showMenu: !this.state.showMenu})
  }

	render() {
		return (
			<nav className="nav-wrap">
				<div className={`navbar-menu`} >
					<div className="">
						<Link className="navbar-item" to="/" activeClassName="active">
							Home
						</Link>
						<a className="navbar-item" onClick={this.dropDown}>
							Selected Work
						</a>
            {this.state.showMenu ? (
              <div className="dropdown">
                <Link 
                  className="navbar-item droplink" 
                  to="/tcs" 
                  activeClassName="active">
                  Terrapin Care Station
                </Link>
                <Link 
                  className="navbar-item droplink" 
                  to="/aetherworks" 
                  activeClassName="active">
                  AetherWorks
                </Link>
                <Link 
                  className="navbar-item droplink" 
                  to="/lucera" 
                  activeClassName="active">
                  Lucera
                </Link>
                <Link 
                  className="navbar-item droplink" 
                  to="/alpine" 
                  activeClassName="active">
                  Alpine Labs
                </Link>
              </div>
            ) : null }
						<Link 
              className="navbar-item" 
              to="/about" 
              activeClassName="active">
							About
						</Link>
						<Link 
              className="navbar-item" 
              to="/contact" 
              activeClassName="active"
              onClick={this.navClick}>
							Contact
						</Link>
					</div>
				</div>
			</nav>
		)
	}
}

export default Navbar
