exports.createPages = ({ actions: { createPage } }) => {
  createPage({
    path: "/posts/",
    component: require.resolve(`./src/templates/blog-post.js`),
  });
};
