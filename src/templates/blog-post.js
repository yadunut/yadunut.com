import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        createdTime
        updatedTime
        title
      }
      html
    }
  }
`;

export default ({ data }) => {
  const {
    html,
    fields: { title },
  } = data.markdownRemark;

  return (
    <Layout>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};
