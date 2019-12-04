import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
import Datefield from "../components/datefield";

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        createdTime(formatString: "DD MMMM YYYY")
        updatedTime(formatString: "DD MMMM YYYY")
        title
      }
      html
    }
  }
`;

export default ({ data }) => {
  const {
    html,
    fields: { title, createdTime, updatedTime },
  } = data.markdownRemark;

  return (
    <Layout>
      <h2>{title}</h2>
      <Datefield message="Created on" date={createdTime} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Datefield
        customCss={css`
          float: right;
        `}
        message="Updated on"
        date={updatedTime}
      />
    </Layout>
  );
};
