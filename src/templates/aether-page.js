import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import disksDepth from "../img/aether-disk-depth.png"
import bigList from "../img/aether-big-list.png"
import breadcrumb from "../img/aether-breadcrumb.png"
import sizeSelect from "../img/aether-size-select.png"
import stack from "../img/aether-stack.png"
import bigDisk from "../img/aether-disk-big.png"

export const AetherPageTemplate = () => {
  return (
    <section className="container aether-container">
      <div className="frame">
        <h1 className="">AetherWorks</h1>
        <div className="row">
          <img src={disksDepth} className="disks-depth" alt="disks" />
        </div>
        <div className="column copy-column">
          <p className="body-copy">
            <b>AetherWorks</b> is a software research & venture development firm based in New York City. I was originally brought me on for a full redesign of their Windows application <b>AetherStore</b>, though soon into that project I was offered the opportunity to redesign their remaining properties, including the new company site and multiple product marketing sites.
          </p>
          <p className="body-copy">
            I intially created the browser-based app with a React/Redux architecture, but it was later determined that a scaled down, less abstracted and mostly jQuery approach was a better fit for this specific project.
          </p>
          <p className="body-copy">
            AetherStore allows users to create network drives from unused hard drive space, often completely negating the need for external LAN storage systems.
          </p>
        </div>
        <div className="row">
          <img src={bigList} className="" alt="disks" />
        </div>
        <div className="row">
          <img src={breadcrumb} className="breadcrumb" alt="disks" />
        </div>
        <div className="row">
          <img src={sizeSelect} className="size-select" alt="disks" />
        </div>
        <div className="row disk-row">
          <img src={stack} className="stack" alt="disks" />
          <img src={bigDisk} className="big-disk" alt="disks" />
        </div>

      </div>
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
