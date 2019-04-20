import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'

export const TCSPageTemplate = () => {
  return (
    <section className="section section--gradient">
      <h1>I'm the tcs page</h1>
    </section>
  )
}

const TCSPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <TCSPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

export default TCSPage

export const tcsPageQuery = graphql`
  query TCSPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
