import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'

export const LuceraPageTemplate = () => {
  return (
    <section className="container">
      <h1>I'm the Lucera page</h1>
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
