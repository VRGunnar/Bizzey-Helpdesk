import React, { useState, useEffect } from "react";
import axios from "axios";
import { Fragment } from "react/cjs/react.production.min";
import styled from "styled-components";
import ArticleTable from "./Articles/ArticleTable";
import GroupTable from "./Groups/GroupTable";

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #f7f7fa;
  font-family: "sans-serif";
`;

const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.div`
  padding: 100px 0 25px 0;
  font-size: 24px;
  font-weight: 400;
`;

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   grid-gap: 20px;
//   width: 100%;
//   padding: 20px;
// `;

const Helpdesk = () => {
  const [articles, setArticles] = useState([]);
  const [groups, setGroups] = useState([]);
  const [loadedArticles, setLoadedArticles] = useState(false);
  const [loadedGroups, setLoadedGroups] = useState(false);

  useEffect(() => {
    axios
      .get("/api/v1/articles.json")
      .then((resp) => {
        setArticles(resp.data.data);
        console.log(resp.data);
        setLoadedArticles(true);
      })
      .catch((resp) => console.log(resp));

    axios
      .get("/api/v1/groups.json")
      .then((resp) => {
        setGroups(resp.data.data);
        console.log(resp.data);
        setLoadedGroups(true);
      })
      .catch((resp) => console.log(resp));
  }, []);
  let articlesTable = [];
  let groupsTable = [];
  let articleGroup = [];

  if (loadedArticles && articles) {
    articlesTable = articles.map((item, index) => {
      return (articlesTable[index] = item.attributes);
    });
  }
  if (loadedGroups && groups) {
    groupsTable = groups.map((item, index) => {
      return (groupsTable[index] = item.attributes);
    });
  }
  // if (loadedGroups && groups && loadedArticles && articles) {
  //   articlesTable = articles.map((article, index) => {
  //     articleGroup = article.relationships.groups.data.map((group, index) => {
  //       if (group.id == article.attributes.id) {

  //       }
  //     })
  //     return (articlesTable[index] = article.attributes);
  //   });
  }

  return (
    <Fragment>
      <Body>
        <Container>
          <Title>Artikels</Title>
          <ArticleTable attributes={[articlesTable]}></ArticleTable>
        </Container>
        <Container>
          <Title>Groups</Title>
          <GroupTable attributes={[groupsTable]}></GroupTable>
        </Container>
      </Body>
    </Fragment>
  );
};

export default Helpdesk;
