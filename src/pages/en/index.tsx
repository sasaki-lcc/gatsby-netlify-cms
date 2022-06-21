import React from "react";
import Layout from "../../components/Layout";
import styled from "styled-components";

const En = () => {
  return (
    <>
      <Layout>
        <Main>
          <h1>英語ページ</h1>
        </Main>
      </Layout>
    </>
  );
};

const Main = styled.div`
  width: 800px;
  height: 400px;
  margin: 0 auto;
  h1 {
    font-weight: bold;
    font-size: 24px;
  }
`;

export default En;
