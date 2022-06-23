import * as React from "react";
import { kebabCase } from "lodash";
import Layout from "../../components/Layout";
import IrRoll from "../../components/IrRoll";
import { Link, graphql } from "gatsby";
import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";

const IrIndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  console.log(posts.frontmatter);
  type Props = {
    id: string;
    name: string;
  };
  const [users, setUsers] = useState<Props[]>([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      <Wrap>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>

        <PostWrap>
          {posts.map(({ node: post }) => (
            <Post key={post.id}>
              <Link to={`/tags/${kebabCase(post.frontmatter.tags)}/`}>タグ</Link>
              <Link to={post.fields.slug}>
                <p>{post.frontmatter.tags}</p>
                <p>{post.excerpt}</p>
                <p>{post.frontmatter.title}</p>
              </Link>
            </Post>
          ))}
        </PostWrap>
        <IrRoll />
      </Wrap>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: { frontmatter: { templateKey: { eq: "ir-post" } } }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            tags
            featuredimage {
              childImageSharp {
                gatsbyImageData(width: 120, quality: 100, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
`;

const Wrap = styled.div`
  width: 800px;
  margin: 0 auto;
`;
const PostWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
`;
const Post = styled.div`
  width: 45%;
  margin: 24px 0;
  border: 1px solid #000;
  a {
    display: block;
    width: 100%;
    padding: 16px;
  }
`;

export default IrIndexPage;
