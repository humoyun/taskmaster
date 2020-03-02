import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      return { ...state, loading: true };
    case "SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FAIL":
      return { ...state, loading: false, error: true };
    default:
      throw new Error();
  }
};

const useSearch = (URL, initData) => {
  const initState = {
    data: initData,
    loading: false,
    error: false
  };

  const [searchURL, setSearchURL] = useState(URL);
  const [state, dispatch] = useReducer(dataFetchReducer, initState);

  // We only want to fetch data when the component mounts.
  useEffect(() => {
    // prevent to set state when component unmounts
    let didCancel = false;

    const fetch = async () => {
      dispatch({ type: "INIT" });

      try {
        const rs = await axios.get(searchURL);
        if (!didCancel) dispatch({ type: "SUCCESS", payload: rs.data });
      } catch (err) {
        if (!didCancel) dispatch({ type: "FAIL" });
      }
    };

    fetch();

    return () => {
      didCancel = true;
    };
  }, [searchURL]);

  return [state, setSearchURL];
};

export default useSearch;
