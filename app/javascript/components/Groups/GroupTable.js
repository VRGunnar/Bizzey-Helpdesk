import React, { Fragment } from "react";
import styled from "styled-components";

const GroupContainer = styled.div`
  padding: 10px;
  background-color: #ffffff;
  border: solid 1px #ccc;
  border-radius: 10px;
`;

const GroupHeader = styled.div`
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
  grid-template-columns: 16% 60% 16% 8%;
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

const CustomTh = styled.th`
  font-weight: 300;
  font-size: 14px;
  text-align: center;
  padding: 10px 0;
`;

const CustomTd = styled.td`
  font-weight: 100;
  font-size: 12px;
  text-align: center;
  padding: 10px 0;
`;

const GroupTable = (props) => {
  
  return (
    <GroupContainer>
      <GroupHeader>
        <ButtonsFront>
          <PrimaryButton>(+ SVG) Nieuwe groep</PrimaryButton>
          <button>(filter SVG) Filter</button>
        </ButtonsFront>
        <button>Sorteer op (pijltjes SVG)</button>
      </GroupHeader>
      <SeperationLine></SeperationLine>
      <CustomTable>
        <CustomTr>
          <CustomTh>Naam</CustomTh>
          <CustomTh>Beschrijving</CustomTh>
          <CustomTh>Aanmaakdatum</CustomTh>
          <CustomTh></CustomTh>
        </CustomTr>
        <CustomTr>
          <CustomTd>Naam 1</CustomTd>
          <CustomTd>Beschrijving 1</CustomTd>
          <CustomTd>Aanmaakdatum 1</CustomTd>
          <CustomTd>SVG options</CustomTd>
        </CustomTr>
        <CustomTr>
          <CustomTd>Naam 2</CustomTd>
          <CustomTd>Beschrijving 2</CustomTd>
          <CustomTd>Aanmaakdatum 2</CustomTd>
          <CustomTd>SVG options</CustomTd>
        </CustomTr>
      </CustomTable>
    </GroupContainer>
  );
};

export default GroupTable;
