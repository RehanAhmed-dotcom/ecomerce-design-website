import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

const Books = () => {
  const { id } = useParams();
  return <h1>Books {id}</h1>;
};

export default Books;
