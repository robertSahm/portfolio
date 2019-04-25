import React, { useState, useEffect } from 'react'
import { Link } from "gatsby"
import aetherDisk from "../img/aether-disk-big.png"
import terrapinLogo from "../img/terrapin-logo-t.png"
import bulb from "../img/lucera_bulb_small.svg"
import alpine from "../img/alpine-small.png"
import Terrapin from '../components/TCS'
import Aether from '../components/Aether'
import Lucera from '../components/Lucera'
import Alpine from '../components/Alpine'

const WorkSelector = () => {
  const [activeTab, setActiveTab] = useState('work')
  const [activeWork, setActiveWork] = useState('')
  const [homeHeight, setHeight] = useState('100vh')
  const [homeLeft, setLeft] = useState('28.5%')
  const [animateTrigger, setTrigger] = useState(1)

  const workClick = (e, name) => {
    setActiveWork(name)
  }

  return (
    <section className="works-wrap">
      <div className="row">
        <div className="link-box tcs-box">
          <div className="logo-wrap">
            <img src={terrapinLogo} alt="logo" />
          </div>
          <h3>Terrapin Care Station</h3>
          <a className={"link-wrap"} onClick={(e) => workClick(e, 'tcs')}
          ></a>
        </div>
        <div className="link-box aether-box">
          <div className="logo-wrap">
            <img src={aetherDisk} alt="logo" />
          </div>
          <h3>AetherWorks</h3>
          <a className="link-wrap" onClick={(e) => workClick(e, 'aether')}></a>
        </div>
        <div className="link-box lucera-box">
          <div className="logo-wrap">
            <img src={bulb} alt="logo" />
          </div>
          <h3>Lucera</h3>
          <a className="link-wrap" onClick={(e) => workClick(e, 'lucera')}></a>
        </div>
        <div className="link-box alpine-box">
          <div className="logo-wrap">
            <img src={alpine} className="alpine" alt="logo" />
          </div>
          <h3>Alpine Labs</h3>
          <a className="link-wrap" onClick={(e) => workClick(e, 'alpine')}></a>
        </div>
      </div>
      {activeWork == 'tcs' ? <Terrapin /> : null}
      {activeWork == 'aether' ? <Aether /> : null}
      {activeWork == 'lucera' ? <Lucera /> : null}
      {activeWork == 'alpine' ? <Alpine /> : null}
      {activeTab == 'about' ? <About /> : null}
      {activeTab == 'contact' ? <Contact /> : null}
    </section>
  )
}


export default WorkSelector
