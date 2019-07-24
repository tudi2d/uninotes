const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___title] }
          ) {
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
      `).then(result => {
        if (result.errors) {
          // Throw exception
        }

        const notesTemplate = path.resolve(`./src/templates/Notes.jsx`);
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: notesTemplate,
            context: {
              slug: node.fields.slug,
            },
          });
        });
      })
    );
  });
};
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  // Creating a new field for the slug
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "pages" });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};
