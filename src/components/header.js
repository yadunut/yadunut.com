import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

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
  return <div>{site.siteMetadata.title}</div>;
};
