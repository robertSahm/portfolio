import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Home from "../components/Home"
import Navbar from "../components/Navbar"
import aetherDisk from "../img/aether-disk-big.png"
import terrapinLogo from "../img/terrapin-logo-t.png"
import bulb from "../img/lucera_bulb_small.svg"
import alpine from "../img/alpine-small.png"

export const IndexPageTemplate = ({ image }) => (
  <div className="home-container">
    <Home />
    <Navbar />
    
    <section className="works-wrap container">
      <div className="row">
        <div className="link-box tcs-box">
          <div className="logo-wrap">
            <img src={terrapinLogo} alt="logo" />
          </div>
          <h3>Terrapin Care Station</h3>
          <Link to="tcs" className="link-wrap"></Link>
        </div>
        <div className="link-box aether-box">
          <div className="logo-wrap">
            <img src={aetherDisk} alt="logo" />
          </div>
          <h3>AetherWorks</h3>
          <Link to="aetherworks" className="link-wrap"></Link>
        </div>
      </div>
      <div className="row">
        <div className="link-box lucera-box">
          <div className="logo-wrap">
            <img src={bulb} alt="logo" />
          </div>
          <h3>Lucera</h3>
          <Link to="lucera" className="link-wrap"></Link>
        </div>
        <div className="link-box alpine-box">
          <div className="logo-wrap">
            <img src={alpine} className="alpine" alt="logo" />
          </div>
          <h3>Alpine Labs</h3>
          <Link to="alpine" className="link-wrap"></Link>
        </div>
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
