const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require("path");

// Creates a `slug` field in the markdown node, used for site Path
exports.onCreateNode = ({ node, getNode, actions, graphql }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: `slug`,
      value: `posts${slug}`,
    });
    const fileNode = getNode(node.parent);
    createNodeField({
      node,
      name: `updatedTime`,
      value: new Date(fileNode.modifiedTime),
    });
    createNodeField({
      node,
      name: `createdTime`,
      value: new Date(fileNode.birthTime),
    });
    createNodeField({
      node,
      name: `title`,
      value: node.frontmatter.title,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const {
    data: {
      allMarkdownRemark: { edges: nodes },
    },
  } = await graphql(`
    {
      allMarkdownRemark${
        process.env.NODE_ENV == "production"
          ? "(filter: { frontmatter: { draft: { ne: true } } })"
          : ""
      } {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  for (let node of nodes) {
    node = node.node;
    createPage({
      path: node.fields.slug,
      component: require.resolve("./src/templates/blog-post.js"),
      context: { slug: node.fields.slug },
    });
  }
};
