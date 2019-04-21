import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import card from "../img/tcs-card.jpg"
import chart1 from "../img/tcs-chart-1.png"
import round from "../img/tcs-round.png"

export const TCSPageTemplate = () => {
  return (
    <section className="container tcs-container">
      <div className="frame">

        <h1>Terrapin Care Station</h1>
        <img src={card} className="tcs-card" alt="tcs-card" />
        <div className="row">
          <div className="column">
            <p className="body-copy">
              <b>Terrapin Care Station</b> is one of the leading cannabis retailers in Colorado. With 6 retail locations and multiple grows including Pensylvania, they are one of the fastest growing legal cannabis operations in the world. I was brought on to revamp their entire digital suite, including a new front-facing company site, an internal sales charting dashboard, multiple e-commerce/CMS integrations and updating the interal sales records API to work with modern front-end development.
            </p>
            <p className="body-copy">
              Leading these projects involved daily coordition between the I.T. department, creative director, marketing, accouting, communications and C. E. O.. Running these projects amid a new and high-paced business environment tested my managerial skills and ultimately improved my coding and managerial skills many times over. 
            </p>
            <img src={round} className="tcs-round" alt="tcs-chart" />
          </div>
          <img src={chart1} className="chart-1" alt="tcs-chart" />
        </div>

      
      
      </div>
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
