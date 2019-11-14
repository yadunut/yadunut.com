import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";

export default () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <header
      css={css`
        margin: 0 auto;
        max-width: 960;
        padding: 1.45rem 1.0875rem;
      `}
    >
      <h1>
        <Link
          to="/"
          css={css`
            text-decoration: none;
            color: #333;
          `}
        >
          {site.siteMetadata.title}
        </Link>
      </h1>
    </header>
  );
};
