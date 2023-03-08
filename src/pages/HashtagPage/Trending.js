import { StyledAside } from "./style";
import React, { useContext } from "react";
import axios from "axios";
import LiHashtags from "./LiHashtags";

export default function Trending() {
  const [trends, setTrends] = React.useState([""]);
  const { REACT_APP_API_URL } = process.env;

  React.useEffect(() => {
    const request = axios.get(`${REACT_APP_API_URL}/trending`);
    request.then((response) => {
      let tags = [];
      response.data.forEach(element => tags.push(Object.values(element)));
      setTrends(tags);
    });
    request.catch((error) => {
      alert(error.response.data.message);
    });
  }, []);

  return (
    <StyledAside>
      <h2>trending</h2>
      <ul>
        {trends.map((tag) => (
          <LiHashtags key={tag} tag={tag} />
        ))}
      </ul>
    </StyledAside>
  );
}
