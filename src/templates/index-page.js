import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  image,
}) => (
  <div>

    <section className="section">
      {/* <Link to="about">heyyyy</Link> */}
      <div className="content">
        <h1 className="title is-1">Robby Sahm</h1>
      </div>
    </section>
  </div>
)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
      />
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
