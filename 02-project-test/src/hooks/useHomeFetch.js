/* eslint-disable no-shadow */
import { useState, useEffect } from "react";

import API from "../API";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log(searchTerm);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);

      setState((prev) => ({
        ...movies,
        result:
          page > 1 ? [...prev.result, ...movies.results] : [...movies.results],
      }));
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchMovies(1);
  }, []);

  return { state, loading, error, searchTerm };
};

export default useHomeFetch;
