import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

const IrPost = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <p>{`${post.frontmatter.date}`}</p>
      <p>{`${post.frontmatter.title}`}</p>
      <p>{`${post.frontmatter.description}`}</p>
      <p>{`${post.frontmatter.tags}`}</p>
    </Layout>
  );
};

export default IrPost;

export const query = graphql`
  query IrPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
