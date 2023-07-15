/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../../../../redux/features/product/productApi";

const BookDetails = () => {
  const { id } = useParams();
  const { data } = useGetSingleBookQuery(id);
  console.log(data, id);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default BookDetails;
