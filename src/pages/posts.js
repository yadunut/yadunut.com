import React from "react";
import Layout from "../components/layout";

import { Link, graphql } from "gatsby";

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          excerpt
          fields {
            title
            slug
            createdTime(formatString: "DD-MM-YYYY")
          }
        }
      }
    }
  }
`;

export default ({ data }) => {
  const postsData = data.allMarkdownRemark.edges.map(node => node.node);
  const posts = postsData.map(post => (
    <div>
      <Link to={post.fields.slug}>
        {post.fields.title} (({post.fields.createdTime}))
      </Link>
      {post.excerpt}
    </div>
  ));
  return <Layout>{posts}</Layout>;
};
