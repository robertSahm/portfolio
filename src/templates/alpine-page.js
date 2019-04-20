import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'

export const AlpinePageTemplate = () => {
  return (
    <section className="container">
      <h1>I'm the Alpine page</h1>
    </section>
  )
}

const AlpinePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AlpinePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

export default AlpinePage

export const alpinePageQuery = graphql`
  query AlpinePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
