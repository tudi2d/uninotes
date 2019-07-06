import { graphql } from "gatsby";
import React from "react";

const notes = props => {
  const notesMarkdown = props.data.markdownRemark;
  const { title } = notesMarkdown.frontmatter;
  return (
    <div
      style={{
        margin: "80px auto",
        maxWidth: 960,
        padding: "0px 30px 30px",
        paddingTop: 0,
        gridColumnStart: 2,
        gridColumnEnd: 3,
      }}
    >
      {title ? <h1>{title}</h1> : null}
      <div dangerouslySetInnerHTML={{ __html: notesMarkdown.html }} />
    </div>
  );
};

export default notes;

export const query = graphql`
  query NotesQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title] }) {
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
