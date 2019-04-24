import React from 'react'
import drums from "../img/drums.png"

const About = () => {

  return (
    <section className="container about-container">
      <div className="frame">
        <div className="row">
          <div className="column copy-column">
            <h1>ABOUT ME</h1>
            <p className="body-copy">
              When I'm not creating for the web, I'm probably playing drums and guitar. I've been playing and writing music the majority of my life and even a spot playing drums for the rock band Le Loup. I spent the greater part of 3 years touring the US and Europe. <a href="https://pitchfork.com/reviews/albums/13551-family/" targe="_blank"  rel="noopener noreferrer">Here's our last Pitchfork review.</a>
            </p>
            <p className="body-copy">
              Navigating the decisions, personalities and solutions inherent to creative group work  comes naturally after decades spent creating original music in team environments.
            </p>
            <p className="body-copy">
              <b>Other fun facts:</b> 
              <ul>
                <li>
                  I spent 6 months in rural Thailand volunteering with Burmese refugees setting them up with Ubuntu computer labs, facilitating medical research for battlefield medics.
                </li>
                <li>
                  I played 4 years of varsity volleyball
                </li>
                <li>
                  My 3 siblings are also musicians, though we never got around to doing the Partridge Family thing.
                </li>
                <li>
                  Between tours with the band I worked as a server at the finest (in my humble opinion) seafood restaurant in Washington D.C.: <a href="http://www.blacksaltrestaurant.com/" targe="_blank"  rel="noopener noreferrer">Blacksalt</a>.
                </li>
              </ul>
            </p>
          </div>
          <div className="column">
            <div className="img-wrap">
              <img src={drums} className="drums" alt="drums" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
