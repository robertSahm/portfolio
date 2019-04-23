import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

export const IndexPageTemplate = ({ image }) => (
  <div className="index-wrapper"></div>
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
