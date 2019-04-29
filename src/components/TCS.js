import React from 'react'
import card from "../img/tcs-card.jpg"
import round from "../img/tcs-round.png"
import app from "../img/tcs-order-app.png"
import gmap from "../img/tcs-gmap.png"
import chart1 from "../img/tcs-chart-1.png"
import chart2 from "../img/tcs-chart-2.png"
import chart3 from "../img/tcs-chart-3.png"
import chart4 from "../img/tcs-chart-4.png"
import tcsLogo from "../img/tcs-logo-full.png"

const TCS = class extends React.Component {
  render() {
    return (
      <section className="container tcs-container">
        <div className="frame">
          <h1>Terrapin Care Station</h1>
          <img src={card} className="tcs-card" alt="tcs-card" />
          <div className="column copy-column">
            <p className="body-copy">
              <b>Terrapin Care Station</b> is one of the leading cannabis retailers in Colorado. With 6 retail locations and multiple grow facilities, including Pensylvania, they are one of the fastest growing legal cannabis operations in the world. I was brought on to revamp their entire digital suite, including a new front-facing company site, an internal sales charting dashboard, and multiple e-commerce/CMS integrations. I also updated the internal sales records API to work with a modern front-end app.
            </p>
            <p className="body-copy">
              Leading these projects involved daily coordination between the IT department, the creative director, the CEO and the marketing, accounting, and communications departments. Running these projects amid a new and high-paced business environment tested my managerial skills and ultimately improved my coding and managerial skills many times over. 
            </p>
          </div>
          <div className="tcs-img-wrap">
            <div className="left-column">
              <img src={app} className="tcs-app" alt="tcs-chart" />
              <img src={round} className="tcs-round" alt="tcs-chart" />
            </div>
            <div className="chart-column">
              <img src={chart1} className="tcs-chart" alt="tcs-chart" />
              <img src={chart2} className="tcs-chart" alt="tcs-chart" />
              <img src={chart3} className="tcs-chart" alt="tcs-chart" />
              <img src={chart4} className="tcs-chart" alt="tcs-chart" />
            </div>
          </div>
          <div className="row">
            <img src={gmap} className="tcs-gmap" alt="tcs-chart" />
          </div>
        </div>
        <img src={tcsLogo} className="tcs-logo-full" alt="tcs-chart" />
      </section>
    )
  }
}

export default TCS
