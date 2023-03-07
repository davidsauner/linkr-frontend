import { StyledAside } from './style';
import React, { useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import LiHashtags from "./LiHashtags";

export default function Hashtag() {
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
