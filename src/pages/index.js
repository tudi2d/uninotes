import React from 'react'
import { graphql, Link } from 'gatsby'
import * as _ from 'lodash'
import Layout from '../components/layout'
import './index.css'

const IndexPage = props => {
  const notes = props.data.allMarkdownRemark
  console.log(notes.edges)
  const subjects = _.chain(notes.edges)
    .groupBy(node => node.node.fields.slug.split('/')[1])
    .map(node => node) //using ES6 shorthand to generate the objects
    .value()
  return (
    <Layout>
      <h2 style={{ textAlign: 'center', fontFamily: 'courier, monospace' }}>
        Subjects
      </h2>
      {subjects.map((arr, i) => (
        <div key={arr[0].node.fields.slug.split('/')[1]}>
          <div>{arr[0].node.fields.slug.split('/')[1].toUpperCase()}</div>
          {arr.map(({ node }, j) => (
            <div key={node.frontmatter.title}>
              <Link to={node.fields.slug} className="link">
                <div className="post-list">{node.frontmatter.title}</div>
              </Link>
            </div>
          ))}
        </div>
      ))}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
