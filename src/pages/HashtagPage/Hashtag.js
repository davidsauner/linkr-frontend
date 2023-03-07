import { StyledAside } from "./style";
import React, { useContext } from "react";
import axios from "axios";
import LiHashtags from "./LiHashtags";

export default function Hashtag() {
  const tags = [
    "javascript",
    "react",
    "css",
    "node",
    "sql",
    "mongodb",
    "drive",
    "hub",
    "ps4",
    "teste",
  ];
  return (
    <StyledAside>
      <h2>trending</h2>
      <ul>
        {tags.map((tag) => (
          <LiHashtags key={tag} tag={tag} />
        ))}
      </ul>
    </StyledAside>
  );
}
