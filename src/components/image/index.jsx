import React from "react";
import { Container } from "./styles";

const Image = ({ url, sub }) => {
  return (
    <Container>
      <img src={url} />
      <span className="display-flex sub">
        <i class="fas fa-camera"></i>
        <p>{sub}</p>
      </span>
    </Container>
  );
};
export default Image;
