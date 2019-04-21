import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import header from "../img/alpine_ss_2.png"
import steps from "../img/alpine_ss_3.png"
import contact from "../img/alpine_ss_4.png"
import work from "../img/alpine_ss_5.png"
import login from "../img/alpine_ss_6.png"
import snowmobile from "../img/alpine_ss_7.png"

export const AlpinePageTemplate = () => {
  return (
    <section className="container aether-container">
      <div className="frame">
        <h1 className="">Alpine Labs</h1>
        <div className="row">
          <img src={header} className="alpine-full" alt="alpine" />
        </div>
        <div className="column copy-column">
          <p className="body-copy">
            <b>Alpine Labs</b> is a boutique video production company based out of West Hollywood, CA. They needed a solution to host and serve their own videos while adhering to a strict design aesthetic. My responsibilities included implimenting static concept art into animated, interactive satisfaction using JS, HTML, SCSS and Ruby.
          </p>
        </div>
        <div className="row">
          <img src={steps} className="alpine-full" alt="alpine" />
        </div>
        <div className="row">
          <img src={contact} className="alpine-full" alt="alpine" />
        </div>
        <div className="row">
          <img src={work} className="alpine-full" alt="alpine" />
        </div>
        <div className="row disk-row">
          <img src={login} className="stack" alt="disks" />
          <img src={snowmobile} className="big-disk" alt="disks" />
        </div>
      </div>
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
