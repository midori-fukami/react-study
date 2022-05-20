/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

import HeroImage from "./HeroImage";

import useHomeFetch from "../hooks/useHomeFetch";

import NoImage from "../images/no_image.jpg";

const Home = () => {
  const { state, loading, error } = useHomeFetch();

  console.log(state);

  return (
    <>
      {state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].BACKDROP_SIZE}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
    </>
  );
};
export default Home;
