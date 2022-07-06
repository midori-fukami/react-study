/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React from "react";
// styles
import { Wrapper, Content } from "./Grid.styles";

const Grid = ({ header, children }) => (
  <Wrapper>
    <h1>{header}</h1>
    <Content>{children}</Content>
  </Wrapper>
);

export default Grid;
