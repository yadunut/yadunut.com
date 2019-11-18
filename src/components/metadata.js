import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Metadata = ({ pathname }) => {
  const {
    site: {
      siteMetadata: { siteUrl, title, twitter },
    },
  } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          siteUrl
          title
          twitter
        }
      }
    }
  `);

  return (
    <Helmet defer={false} defaultTitle={title}>
      <html lang="en" />
      <link rel="canonical" href={`${siteUrl}`} />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />

      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en" />
      <meta property="og:site_name" content={title} />

      <meta property="twitter:card" content="summary" />
      <meta property="twitter:site" content={twitter} />
    </Helmet>
  );
};

export default Metadata;
