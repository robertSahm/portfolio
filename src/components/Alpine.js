import React from 'react'
import header from "../img/alpine_ss_2.png"
import steps from "../img/alpine_ss_3.png"
import contact from "../img/alpine_ss_4.png"
import work from "../img/alpine_ss_5.png"
import login from "../img/alpine_ss_6.png"
import snowmobile from "../img/alpine_ss_7.png"

const Alpine = class extends React.Component {
  render() {
    return (
      <section className="container alpine-container">
        <div className="frame">
          <h1 className="">Alpine Labs</h1>
          <div className="row">
            <img src={header} className="alpine-full" alt="alpine" />
          </div>
          <div className="column copy-column">
            <p className="body-copy">
              <b>Alpine Labs</b> is a boutique video production company based out of West Hollywood, CA. They needed a solution to host and serve their own videos while adhering to a strict design aesthetic. My responsibilities included implimenting static concept art into animated, interactive satisfaction using JS, HTML, SCSS and Ruby.
            </p>
          </div>
          <div className="row">
            <img src={steps} className="alpine-full" alt="alpine" />
          </div>
          <div className="row">
            <img src={contact} className="alpine-full" alt="alpine" />
          </div>
          <div className="row">
            <img src={work} className="alpine-full" alt="alpine" />
          </div>
          <div className="row bottom-row">
            <img src={login} className="login" alt="login" />
            <img src={snowmobile} className="snowmobile" alt="snowmobile" />
          </div>
        </div>
      </section>
    )
  }
}

export default Alpine
