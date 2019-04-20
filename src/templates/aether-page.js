import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'

export const AetherPageTemplate = () => {
  return (
    <section className="container">
      <h1>I'm the AetherWorks page</h1>
    </section>
  )
}

const AetherPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AetherPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

export default AetherPage

export const aetherPageQuery = graphql`
  query AetherPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
