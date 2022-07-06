/* eslint-disable no-unused-vars */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
import React from "react";
// Styles
import { Image } from "./Thumb.styles";

const Thumb = ({ image, movieId, clickable }) => (
  <div>
    <Image src={image} alt={`"movie-thumb"`} />
  </div>
);

export default Thumb;
