const { createFilePath } = require(`gatsby-source-filesystem`);

// Creates a `slug` field in the markdown node, used for site Path
exports.onCreateNode = ({ node, getNode, actions, graphql }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
    createNodeField({
      node,
      name: `createdTime`,
      value: new Date(slug.substr(1, 10)),
    });
    const fileNode = getNode(node.parent);
    createNodeField({
      node,
      name: `updatedTime`,
      value: new Date(fileNode.modifiedTime),
    });
    createNodeField({
      node,
      name: `title`,
      value: node.frontmatter.title,
    });
    console.log(`Node is `, node);
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
    console.log(`creating node`);
    const slug = node.fields.slug;
    createPage({
      path: `posts${slug}`,
      component: require.resolve("./src/templates/blog-post.js"),
      context: {
        slug: slug,
      },
    });
  }
};
