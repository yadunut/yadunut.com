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

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const {
    data: {
      allMarkdownRemark: { edges: results },
    },
  } = await graphql(`
    {
      allMarkdownRemark {
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

  const nodes = results.map(node => node.node);

  for (const node of nodes) {
    const slug = node.fields.slug;
    createPage({
      path: slug,
      component: require.resolve("./src/templates/blog-post.js"),
      context: {
        slug: slug,
      },
    });
  }
};
