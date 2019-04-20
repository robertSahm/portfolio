import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SvgLines from "react-mt-svg-lines"
import aetherDisk from "../img/disk-big-green.png"
import terrapinLogo from "../img/terrapin-logo-t.png"
import bulb from "../img/lucera_bulb_small.svg"
import alpine from "../img/alpine-small.png"

export const IndexPageTemplate = ({ image }) => (
  <div>
    <section className="container home-wrap bg-tan">
      <h1 className="pink twelve">
        <span>R</span>
        <span>O</span>BBY <span>S</span>AHM
      </h1>
      <h2 className="orange twelve">Web Developer and Designer</h2>
      <div className="row">
        <div className="nav three">
          <Link to="about" className="nav-link row">
            Selected Work
          </Link>
          <Link to="about" className="nav-link row">
            About
          </Link>
          <Link to="about" className="nav-link row">
            Contact
          </Link>
        </div>
        <div className="svg-wrap">
          <SvgLines animate={true} duration={1000} stagger={100} fade={true} hide={false}>
            <svg viewBox="0 0 850 850">
              <path className="svg-shape" d="M126.295079,849 C126.295079,836.832135 126.295077,822.542941 126.295079,726.676279 C126.295077,702.000539 110.831649,673.761239 70.0693065,645.879145 C29.3069638,617.997052 35.0800894,602.923045 29.3069613,555.780551 C29.3069601,514.151616 5.68434189e-14,132.73142 5.68434189e-14,132.73142 C5.68434189e-14,132.73142 1.06901023,120.940163 7.32227341,131.182745 C13.5755378,141.425327 84.0844314,525.783667 92.3327317,547.310075 C100.581031,568.836484 96.6248327,575.27831 153.812416,617.997054 C211,660.7158 211,766.376798 211,766.376798 L211,849 L126.295079,849 Z" id="Path-9-Copy" fill="#EC5C1E"/>
              <path className="svg-shape" d="M616.799842,434.715689 C500.301191,527.652982 388.992389,634.740289 388.992389,849 L255.017899,849 C254.664206,833.809959 259.552328,796.040162 269.682265,735.690608 C298.160176,638.598485 568.444458,424.113776 698.731576,325.874187 C829.018694,227.634598 734.060867,327.884538 727.001422,335.698146 C701.599531,361.076706 664.865671,394.082554 616.799842,434.715689 Z" id="Path-8-Copy" fill="#4374C5" />
              <path className="svg-shape" d="M347.55102,849 L230,849 C240.893934,732.342197 228.33602,623.46257 466.235389,453.123408 C560.155323,385.875468 578.969484,272.322547 578.969484,272.322547 C578.969485,263.635612 585.308691,245.806205 590,263.635611 C585.308691,345.214063 561.699843,432.225215 460.694169,539.772695 C393.357053,611.471016 355.64267,714.546784 347.55102,849 Z" id="Path-7-Copy" fill="#EC5C1E" />
              <path className="svg-shape" d="M284.76339,849 L222.499973,849 C216.489321,695.545595 264.673551,585.537029 367.052663,518.974302 C433.987161,475.45622 433.987161,427.500995 433.987161,427.500995 C433.987161,412.930796 445,409.25283 445,426.467829 C440.316208,507.929698 394.618274,516.740159 332.802038,594.29811 C292.575449,637.137479 289.327613,681.041356 284.76339,725.238251 C279.930274,772.038931 279.930274,813.292847 284.76339,849 Z" id="Path-6-Copy" fill="#101B2D" />
              <path className="svg-shape" d="M120.146993,558.807045 C106.730746,531.022383 160.221838,560.167158 169.170541,566.370356 C209.848223,594.486599 241.012375,612.774729 247.610285,686.684584 C252.008892,735.95782 255.805464,790.062959 259,849 L179.593825,848.872242 L153.354911,849 C161.865177,706.975837 150.795871,610.244853 120.146993,558.807045 Z" id="Path-5-Copy" fill="#ED599F" />
              <path className="svg-shape" d="M229,849 L229,247.672995 C229,214.761061 239.773796,121.881207 270.479705,99 C277.588402,99.0000001 274.354492,103.678832 274.354492,103.678832 C274.354492,103.678832 250.645051,156.89535 255.701175,186.40639 C283.92037,127.494025 300.270078,108.325048 300.270078,108.325048 C300.270078,108.325048 315.583162,99.0000001 307.792243,116.615296 C307.792243,116.615296 274.354492,173.935435 270.81048,214.761061 C262.115838,260.781433 284.508085,385.410926 307.792243,543.035375 C331.0764,700.659823 352,849 352,849 L229,849 Z" id="Path-4-Copy" fill="#FFC020" />
              <path className="svg-shape" d="M448.127273,849 L378,849 C377.999986,599.451473 565.740069,648.163123 573.632295,650.019818 C581.524521,651.876512 585.215431,661.711952 573.632293,664.732351 C535.919878,674.566174 475.267841,708.589254 460.954824,749.001482 C446.421653,790.035311 448.127273,837.244042 448.127273,849 Z" id="Path-3-Copy" fill="#ED599F" />
              <path className="svg-shape" d="M410.430233,849 L354,849 C400.815256,644.995741 539.856784,561.33152 539.856784,561.33152 C539.856784,561.33152 591.370129,526.671372 546.928336,573.567447 C442.93188,661.560074 397.432512,753.370925 410.430233,849 Z" id="Path-2-Copy" fill="#101B2D" />
              <path className="svg-shape" d="M187,849 L219.043897,5.61649233 C219.043897,5.61649233 223.77717,-7.02061541 229.34608,5.61649233 L283,849 L187,849 Z" id="Path-1-Copy" fill="#EC5C1E" />
            </svg>
          </SvgLines>
        </div>
      </div>
    </section>

    <section className="works-wrap container">
      <h2 className="works-header black-text">Selected Works</h2>

      <div className="link-row">
        <div className="logo-wrap">
          <img src={terrapinLogo} alt="logo" />
        </div>
        <div className="text-vert-middle">
          <h3 className="black-text">Terrapin Care Station</h3>
        </div>
        <Link to="tcs" className="link-wrap"></Link>
      </div>

      <div className="link-row">
        <div className="logo-wrap">
          <img src={aetherDisk} alt="logo" />
        </div>
        <div className="text-vert-middle">
          <h3 className="black-text">AetherWorks</h3>
        </div>
        <Link to="aetherworks" className="link-wrap"></Link>
      </div>

      <div className="link-row">
        <div className="logo-wrap">
          <img src={bulb} alt="logo" />
        </div>
        <div className="text-vert-middle">
          <h3 className="black-text">Lucera Financial Infrastructures</h3>
        </div>
        <Link to="lucera" className="link-wrap"></Link>
      </div>

      <div className="link-row">
        <div className="logo-wrap">
          <img src={alpine} className="alpine" alt="logo" />
        </div>
        <div className="text-vert-middle">
          <h3 className="black-text">Alpine Labs</h3>
        </div>
        <Link to="alpine" className="link-wrap"></Link>
      </div>


    </section>
  </div>
)

const IndexPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark

	return (
		<Layout>
			<IndexPageTemplate image={frontmatter.image} />
		</Layout>
	)
}

export default IndexPage

export const pageQuery = graphql`
	query IndexPageTemplate {
		markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
			frontmatter {
				title
				image {
					childImageSharp {
						fluid(maxWidth: 2048, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`
