import React, { useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import LiHashtags from "./LiHashtags";

export default function Trending() {
  return (
    <StyledAside>
      <h2>trending</h2>
      <ul>
        <li># java</li>
        <li># react</li>
        <li># grana</li>
        <li># money</li>
        <li># teste</li>
        <li># front</li>
        <li># git</li>
        <li># hub</li>
        <li># driven</li>
        <li># ps4</li>
      </ul>
    </StyledAside>
  );
}

const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  font-weight: 700;
  height: 406px;
  width: 301px;
  padding: 16px;
  background: #171717;
  color: #ffffff;
  border-radius: 16px;
  h2 {
    height: 61px;
    width: 100%;
    font-family: "Oswald", sans-serif;
    font-size: 27px;
    line-height: 40px;
    border-bottom: 1px solid #484848;
  }
  ul {
    padding-top: 22px;
    font-family: "Lato", sans-serif;
    font-size: 19px;
    line-height: 23px;
    letter-spacing: 0.05em;
  }
`;
