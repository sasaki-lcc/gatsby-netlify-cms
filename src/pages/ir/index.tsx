import * as React from "react";
import Layout from "../../components/Layout";
import IrRoll from "../../components/IrRoll";
import { graphql } from "gatsby";
import axios from "axios";
import { useState, useEffect } from "react";
import { number } from "prop-types";

const IrIndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  console.log(posts);
  type Props = {
    name: string;
  };
  //const numbers = [1, 2, 3, 4, 5];
  const numbers = [
    {
      name: "山田太郎",
    },
    {
      name: "鈴木一郎",
    },
  ];
  console.log(numbers);
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
  console.log(users);

  return (
    <Layout>
      {/* {numbers.map((number) => (
        <li>{number}</li>
      ))} */}
      {users.map((user) => (
        <li>{user.name}</li>
      ))}

      {posts.map(({ node: post }) => (
        <div key={post.id}>
          <p>{post.excerpt}</p>
          <p>{post.frontmatter.title}</p>
        </div>
      ))}
      <IrRoll />
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

export default IrIndexPage;
