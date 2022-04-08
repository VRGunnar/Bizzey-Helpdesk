import React, { Fragment } from "react";
import styled from "styled-components";

const ArticleContainer = styled.div`
  padding: 10px;
  background-color: #ffffff;
  border: solid 1px #ccc;
  border-radius: 10px;
`;

const ArticleHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonsFront = styled.div`
  display: flex;
  gap: 10px;
`;

const PrimaryButton = styled.button`
  background-color: #438afc;
  border: none;
  border-radius: 10px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  padding: 15px 30px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;

  :hover {
    background-color: #2577fc;
  }
`;

const SeperationLine = styled.span`
  display: block;
  widht: 100%;
  height: 1px;
  background-color: #cccccc;
  margin-top: 10px;
`;

const CustomTable = styled.table`
  margin-top: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CustomTr = styled.tr`
  width: 100%;
  display: grid;
  grid-template-columns: 20% 47% 10% 6% 12% 5%;
  transition: background-color 0.2s ease-in;

  :first-child {
    background-color: #cccccc;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  :last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  :nth-child(2n + 3) {
    background: #ececec;
    cursor: pointer;
  }

  :nth-child(n + 2):hover {
    background: #b3e5fc;
    cursor: pointer;
  }
`;

const CustomThLeftAlign = styled.th`
  font-weight: 300;
  font-size: 14px;
  text-align: left;
  padding: 10px;
`;

const CustomThCenterAlign = styled.th`
  font-weight: 300;
  font-size: 14px;
  text-align: center;
  padding: 10px;
`;

const CustomTdLeftAlign = styled.td`
  font-weight: 100;
  font-size: 12px;
  padding: 10px;
  text-align: left;
`;

const CustomTdCenterAlign = styled.td`
  font-weight: 100;
  font-size: 12px;
  padding: 10px;
  text-align: center;
`;

const ArticleTable = (props) => {
  const articles = props.attributes[0];
  return (
    <ArticleContainer>
      <ArticleHeader>
        <ButtonsFront>
          <PrimaryButton>(+ SVG) Nieuw artikel</PrimaryButton>
          <button>(filter SVG) Filter</button>
        </ButtonsFront>
        <button>Sorteer op (pijltjes SVG)</button>
      </ArticleHeader>
      <SeperationLine></SeperationLine>
      <CustomTable>
        <CustomTr>
          <CustomThLeftAlign>Naam FAQ artikel</CustomThLeftAlign>
          <CustomThLeftAlign>Beschrijving FAQ artikel</CustomThLeftAlign>
          <CustomThCenterAlign>FAQ Groep</CustomThCenterAlign>
          <CustomThCenterAlign>Status</CustomThCenterAlign>
          <CustomThCenterAlign>Aanmaakdatum</CustomThCenterAlign>
          <CustomThCenterAlign></CustomThCenterAlign>
        </CustomTr>
        {articles.map((item, index) => {
          return (
            <CustomTr>
              <CustomTdLeftAlign>{item.name}</CustomTdLeftAlign>
              <CustomTdLeftAlign>{item.description}</CustomTdLeftAlign>
              <CustomTdCenterAlign>groep komt hier</CustomTdCenterAlign>
              <CustomTdCenterAlign>{item.status}</CustomTdCenterAlign>
              <CustomTdCenterAlign>{(item.created_at).slice(0,10)}</CustomTdCenterAlign>
              <CustomTdCenterAlign>options</CustomTdCenterAlign>
            </CustomTr>
          );
        })}
      </CustomTable>
    </ArticleContainer>
  );
};

export default ArticleTable;
