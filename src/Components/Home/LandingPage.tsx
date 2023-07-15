/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { useGetBooksQuery } from "../../redux/features/product/productApi";
import BooksCard from "../UI/Book/BooksCard";

const LandingPage = () => {
  const { data } = useGetBooksQuery(undefined);
  const bookData = data?.data;
  return (
    <div>
      <div className="grid grid-cols-5 gap-10 mx-20">
        {data?.data.map((book) => (
          <BooksCard book={book}></BooksCard>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
