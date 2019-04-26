import React from "react"
import { navigate } from "gatsby-link"
import Layout from "../../components/Layout"
import SvgLines from "react-mt-svg-lines"

function encode(data) {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&")
}

export default class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = { isValidated: false }
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	handleSubmit = e => {
		e.preventDefault()
		const form = e.target
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({
				"form-name": form.getAttribute("name"),
				...this.state
			})
		})
			.then(() => navigate(form.getAttribute("action")))
			.catch(error => alert(error))
	}

	render() {
		return (
			<Layout>
				<section className="container contact-container">
					<div className="frame">
            <h1>Contact</h1>
            <div className="row">
              <div className="left-side"></div>
                <div className="svg-wrap-star">
                  <SvgLines 
                    animate={1}
                    duration={2000} 
                    stagger={1000} 
                    fade={true} 
                    timing={'ease-in-out'}
                    // playback={'1 alternate-reverse both'}
                  >
                  <svg viewBox="0 0 850 850">
                    <path d="M539.937156,762.958228 L460.735927,501.867563 L672.609832,678.422259 L495.886897,467.024377 L757.849931,551.246727 L514.068522,421.012446 C514.072008,420.995014 782.834498,396.774729 782.834498,396.774729 L514.228185,372.602737 C514.149491,372.195136 755.785509,247.604562 755.785509,247.604562 L495.077106,326.462858 C494.897793,326.19819 668.05631,118.142759 668.05631,118.142759 L459.763125,291.745708 C459.660741,291.678856 541.509852,37.2214084 541.509852,37.2214084 L415.913914,271.62015 L391.417248,0 L366.920584,271.62015 L241.324646,37.2214084 L323.378833,291.545592 C323.276243,291.612151 114.778187,118.142759 114.778187,118.142759 L288.298287,325.67103 C288.117003,325.934246 27.0489891,247.604562 27.0489891,247.604562 L268.848331,371.382061 C268.765681,371.78824 0,396.774729 0,396.774729 L268.755528,420.960147 C268.759007,420.977581 24.9845665,551.246727 24.9845665,551.246727 L286.947601,467.024377 L110.224666,678.422259 L322.098571,501.867563 L242.897341,762.958228 L366.444835,522.433544 L390.603959,790.038699 L415.006229,519.740252 L539.937156,762.958228 Z" id="Combined-Shape-Copy-3" fill="#FFBD1F"></path>
                    <path d="M539.937156,764.128599 L460.735927,503.037936 L672.609832,679.59263 L495.886897,468.194748 L757.849931,552.417098 L514.068522,422.182819 C514.072008,422.165387 782.834498,397.9451 782.834498,397.9451 L510.761344,370.850418 C504.647973,370.963752 440.860524,415 391.417249,415 C343.894575,415 285.315206,371.411241 275.742096,371.481657 L0,397.9451 L268.755528,422.130519 C268.759007,422.147953 24.9845665,552.417098 24.9845665,552.417098 L286.947601,468.194748 L110.224666,679.59263 L322.098571,503.037936 L242.897341,764.128599 L366.444835,523.603916 L390.603959,791.209071 L415.006229,520.910623 L539.937156,764.128599 Z" id="Combined-Shape-Copy-2" fill="#F05C29"></path>
                  </svg>
                </SvgLines>
              </div>
              <div className="form-wrap">
                <form
                  name="contact"
                  method="post"
                  action="/contact/thanks/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={this.handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <label>
                      Don’t fill this out:{" "}
                      <input name="bot-field" onChange={this.handleChange} />
                    </label>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={"name"}>
                      Your name
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={"text"}
                        name={"name"}
                        onChange={this.handleChange}
                        id={"name"}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={"email"}>
                      Email
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={"email"}
                        name={"email"}
                        onChange={this.handleChange}
                        id={"email"}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={"message"}>
                      Message
                    </label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        name={"message"}
                        onChange={this.handleChange}
                        id={"message"}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <button className="button is-link" type="submit">
                      Send
                    </button>
                  </div>
                </form>

              </div>
            </div>
					</div>
				</section>
			</Layout>
		)
	}
}
