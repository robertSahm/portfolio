import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import SvgLines from "react-mt-svg-lines"
import lucera1 from "../img/lucera_ss_1.png"
import lucera2 from "../img/lucera_ss_2.png"
import lucera3 from "../img/lucera_ss_3.png"
import lucera4 from "../img/lucera_ss_4.png"
import lucera5 from "../img/lucera_ss_5.png"
import lucera6 from "../img/lucera_ss_6.png"
import lucera7 from "../img/lucera_ss_7.png"
import lucera8 from "../img/lucera_ss_8.jpg"
import lucera9 from "../img/lucera_ss_9.jpg"

export const LuceraPageTemplate = () => {
  return (
    <section className="container lucera-container">
      <div className="frame">
        <div className="row">
          <div className="header-text column">
            <h1 className="">Lucera <span>Financial</span> <span>Infrastructures</span></h1>
          </div>

          <div className="bulb-wrap column">
            <SvgLines animate={true} duration={4000} stagger={100} fade={true}>
              <svg viewBox="0 0 348 488">
                <g id="Lucera-Detail" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="-" transform="translate(-739.000000, -137.000000)">
                    <g id="Group-6" transform="translate(742.000000, 140.000000)">
                      <path d="M242.635135,121.269968 C242.635135,53.5761709 188.31941,0 121.317568,0 C54.3157251,0 -8.67167024e-06,54.2944141 0,121.269968 C7.92510335e-06,182.47942 58.9180857,291.475193 58.9180857,291.475193 C62.1128414,297.617843 70.3298721,302.517893 77.2515188,302.420042 L161.083869,301.23491 C168.014389,301.136933 171.551049,306.290235 168.993977,312.718094 L169.626635,311.127746 C167.064747,317.56771 159.375134,322.825529 152.436032,322.871516 L87.2681107,323.303397 C80.3358908,323.349339 77.0829365,328.482133 80.0088652,334.78166 L79.4370807,333.550608 C82.3601301,339.843936 90.3501976,344.886547 97.288272,344.813544 L145.346863,344.307862 C152.282755,344.234881 156.229707,349.535328 154.161007,356.151929 L155.487642,351.908774 C153.419668,358.523052 146.128284,363.811156 139.180698,363.719807 L105.745994,363.280193 C98.807892,363.188968 96.1038832,367.913596 99.7142024,373.845731 L98.2260033,371.400463 C101.832839,377.326873 110.373795,382.101223 117.320165,382.064179 L139.292378,381.947005 C144.041758,381.921678 147.454297,385.727474 146.914847,390.444423 L147.030093,389.436711 C146.528358,393.823878 142.579569,397.843292 138.183935,398.451682 C138.183935,398.451682 -171,436.568877 333.527027,472.757376" id="Oval-9" stroke="#1E3055" strokeWidth="6"></path>
                      <rect id="Rectangle-16" fill="#4892E1" x="76" y="95" width="86" height="23"></rect>
                      <rect id="Rectangle-37" fill="#4892E1" x="76" y="146" width="86" height="23"></rect>
                      <rect id="Rectangle-38" fill="#4892E1" x="76" y="198" width="86" height="23"></rect>
                      <path d="M120.878378,312.817891 C127.229653,312.817891 132.378378,307.669166 132.378378,301.317891 C132.378378,294.966617 127.229653,289.817891 120.878378,289.817891 C114.527104,289.817891 109.378378,294.966617 109.378378,301.317891 C109.378378,307.669166 114.527104,312.817891 120.878378,312.817891 Z" id="Oval-24" fill="#4892E1"></path>
                      <circle id="Oval-23" fill="#4892E1" cx="36.1486486" cy="242.490415" r="11.5"></circle>
                      <path d="M36.1486486,46.7188498 C42.4999233,46.7188498 47.6486486,41.5701245 47.6486486,35.2188498 C47.6486486,28.8675752 42.4999233,23.7188498 36.1486486,23.7188498 C29.797374,23.7188498 24.6486486,28.8675752 24.6486486,35.2188498 C24.6486486,41.5701245 29.797374,46.7188498 36.1486486,46.7188498 Z" id="Oval-22" fill="#4892E1"></path>
                      <ellipse id="Oval-21" fill="#2266BF" cx="241.864865" cy="116.265176" rx="9.24324324" ry="9.23961661"></ellipse>
                      <circle id="Oval-22" fill="#4892E1" cx="242.121622" cy="117.525559" r="11.5"></circle>
                      <circle id="Oval-25" fill="#4892E1" cx="333.013514" cy="473.020767" r="11.5"></circle>
                      <circle id="Oval-20" fill="#4892E1" cx="77.7837838" cy="409.36262" r="11.5"></circle>
                    </g>
                  </g>
                </g>
              </svg>
            </SvgLines>
          </div>
        </div>

        <div className="row">
          <div className="column copy-column">
            <p className="body-copy">
              Lucera’s sofware as a service provides a complete computing and networking infrastructure, tuned for the low-latency demands of high frequency currency trading. During my 2 years as a front-end engineer and designer, my responsibilities included:
            </p>
            <ul className="bullet-list">
              <li className="body-copy">
                JavaScript, React, Backbone, SmartOS, Webpack/Growl, Sass, D3
              </li>
              <li className="body-copy">
                Designing and coding UI's for client traders and engineers
              </li>
              <li className="body-copy">
                Creating internal and public-facing style guides
              </li>
              <li className="body-copy">
                Designing and coding branding and marketing materials including the main marketing site, lucera.com.
              </li>
            </ul>
          </div>            
        </div>

        <div className="row">
          <div className="column">
            <img src={lucera1} alt="lucera" className="lucera-1" />
          </div>
          <div className="column">
            <img src={lucera2} alt="lucera" className="lucera-2" />
          </div>
        </div>

        <div className="row">
          <div className="column">
            <img src={lucera3} alt="lucera" className="lucera-3" />
          </div>
          <div className="column">
            <img src={lucera4} alt="lucera" className="lucera-4" />
          </div>
        </div>

        <div className="row">
          <div className="column">
            <img src={lucera5} alt="lucera" className="lucera-5" />
          </div>
        </div>

        <div className="row">
          <div className="column">
            <img src={lucera6} alt="lucera" className="lucera-6" />
          </div>
          <div className="column">
            <img src={lucera7} alt="lucera" className="lucera-7" />
          </div>
        </div>

        <div className="row">
          <div className="column">
            <img src={lucera8} alt="lucera" className="lucera-8" />
          </div>
          <div className="column">
            <img src={lucera9} alt="lucera" className="lucera-9" />
          </div>
        </div>



      </div>
      <Link to="aether" className="link-left">previous</Link>
    </section>
  )
}

const LuceraPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <LuceraPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

export default LuceraPage

export const luceraPageQuery = graphql`
  query LuceraPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
