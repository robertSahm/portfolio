import React from "react"
import { Link } from "gatsby"

const Navbar = class extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			active: false,
			navBarActiveClass: ""
		}
	}

	render() {
		return (
			<nav className="nav-wrap">
				<div className={`navbar-menu`} >
					<div className="">
						<Link className="navbar-item" to="/" activeClassName="active">
							Home
						</Link>
						<a className="navbar-item" activeClassName="active">
							Work
						</a>
						<Link className="navbar-item" to="/about" activeClassName="active">
							About
						</Link>
						<Link className="navbar-item" to="/contact" activeClassName="active">
							Contact
						</Link>
					</div>
				</div>
			</nav>
		)
	}
}

export default Navbar
