/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React from "react";

import { Wrapper, Content, Text } from "./HeroImage.sytles";

const HeroImage = ({ image, title, text }) => (
  <Wrapper image={image}>
    <Content>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
    </Content>
  </Wrapper>
);

export default HeroImage;
