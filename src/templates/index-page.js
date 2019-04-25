import React from 'react'
import Layout from '../components/Layout'
import WorkSelector from '../components/WorkSelector'


const IndexPage = () => {
	return (
    <div>
      <div className="index-wrapper">
        <Layout />
        <WorkSelector />
      </div>
{/* 
      <form
        name="contact-me"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action='?no-cache=1'
      >

        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact-me" />

        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />


        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />

        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="6" />

        <input type="submit" value="Send Message" className="special" />
      </form> */}
    </div>
  )
}

export default IndexPage

  // const tabClick = (e, name) => {
  //   setActiveTab(name)
  //   setLeft('60%')
  //   setHeight('20vh')
  //   setTrigger(animateTrigger + 1)
  //   // e.target.classList.toggle('active')
  //   // activeTab == 'work' ? setActiveWork('tcs') : setActiveWork('')
  //   activeTab == 'about' || 'contact' ? setActiveWork('') : setActiveWork('tcs')
  // }

  // const growHome = () => {
  //   setHeight('100vh')
  //   setLeft('28.5%')
  //   setTrigger(animateTrigger + 1)
  // }

  // const workClick = (e, name) => {
  //   setActiveWork(name)
  // }

  // const WorkSelector = () => {
  //   return (
  //     <section className="works-wrap">
  //       <div className="row">
  //         <div className="link-box tcs-box">
  //           <div className="logo-wrap">
  //             <img src={terrapinLogo} alt="logo" />
  //           </div>
  //           <h3>Terrapin Care Station</h3>
  //           <a className={"link-wrap"} onClick={(e) => workClick(e, 'tcs')}
  //           ></a>
  //         </div>
  //         <div className="link-box aether-box">
  //           <div className="logo-wrap">
  //             <img src={aetherDisk} alt="logo" />
  //           </div>
  //           <h3>AetherWorks</h3>
  //           <a className="link-wrap" onClick={(e) => workClick(e, 'aether')}></a>
  //         </div>
  //         <div className="link-box lucera-box">
  //           <div className="logo-wrap">
  //             <img src={bulb} alt="logo" />
  //           </div>
  //           <h3>Lucera</h3>
  //           <a className="link-wrap" onClick={(e) => workClick(e, 'lucera')}></a>
  //         </div>
  //         <div className="link-box alpine-box">
  //           <div className="logo-wrap">
  //             <img src={alpine} className="alpine" alt="logo" />
  //           </div>
  //           <h3>Alpine Labs</h3>
  //           <a className="link-wrap" onClick={(e) => workClick(e, 'alpine')}></a>
  //         </div>
  //       </div>
  //     </section>
  //   )
  // }