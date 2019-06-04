import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

const notes = props => {
  const notesMarkdown = props.data.markdownRemark;
  const { title, description } = notesMarkdown.frontmatter;
  return (
    <Layout {...props}>
      <div
        style={{
          margin: "30px auto",
          maxWidth: 960,
          padding: "0px 1.0875rem 1.45rem",
          paddingTop: 0,
          gridColumnStart: 2,
          gridColumnEnd: 3,
        }}
      >
        <h1>{title}</h1>
        <h3>{description}</h3>
        <div dangerouslySetInnerHTML={{ __html: notesMarkdown.html }} />
      </div>
    </Layout>
  );
};

export default notes;

export const query = graphql`
  query NotesQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
          headings {
            value
            depth
          }
        }
      }
    }
  }
`;
