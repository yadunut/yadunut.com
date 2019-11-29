import React from "react";
import Layout from "../components/layout";
import { css } from "@emotion/core";

import { Link, graphql } from "gatsby";
import { rhythm } from "../utils/typography";

export const query = graphql`
  {
    allMarkdownRemark(sort: { order: DESC, fields: [fields___updatedTime] }) {
      edges {
        node {
          excerpt
          fields {
            title
            slug
            createdTime(formatString: "DD MMMM YYYY")
          }
        }
      }
    }
  }
`;

export default ({ data }) => {
  const postsData = data.allMarkdownRemark.edges.map(node => node.node);
  const posts = postsData.map(post =>
    Post({
      slug: post.fields.slug,
      title: post.fields.title,
      createdDate: post.fields.createdTime,
      updatedDate: post.fields.updatedDate,
      excerpt: post.excerpt,
    })
  );
  return <Layout>{posts}</Layout>;
};

const Post = ({ slug, title, createdDate, excerpt, updatedDate }) => {
  return (
    <div
      css={css`
        background: #ffffff;
        padding: ${rhythm(0.25)} ${rhythm(1)} ${rhythm(0.5)};
        &:hover {
          background: #f0f0f0;
        }
      `}
    >
      <Link
        to={slug}
        css={css`
          color: inherit;
          &:hover {
            text-decoration: none;
          }
        `}
      >
        <h3
          css={css`
            margin-top: ${rhythm(0.5)};
          `}
        >
          {title}
        </h3>
        <h5>
          <time dateTime={createdDate}>{createdDate}</time>
        </h5>
        <p>{excerpt}</p>
      </Link>
    </div>
  );
};
