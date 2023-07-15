/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import {
  useGetBooksQuery,
  useGetSearchedBooksQuery,
} from "../../redux/features/product/productApi";
import BooksCard from "../UI/Book/BooksCard";
import { useAppSelector } from "../../redux/hooks";
import { useState } from "react";

const LandingPage = () => {
  const [searchTerm, setSearch] = useState();

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const search = form.search.value;
    setSearch(search);
    console.log(search);
  };

  const {
    data: searchedBookData,
    isLoading,
    isError,
  } = useGetSearchedBooksQuery(searchTerm);

  const { data: prevBookData } = useGetBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  console.log(prevBookData, searchedBookData);

  return (
    <div>
      <div className="mx-auto relative w-2/4 mt-6 mb-6">
        <form onSubmit={handleSearch}>
          <label className="sr-only ml-4"> Search </label>

          <input
            type="text"
            id="Search"
            name="search"
            placeholder="Search for..."
            className="w-full ml-4 rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
          />

          <span className="absolute inset-y-0 end-0 grid w-10 place-content-center ml-4">
            <button
              type="button"
              className="text-gray-600 hover:text-gray-700 ml-4"
            >
              <span className="sr-only ml-4">Search</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </span>
        </form>
      </div>
      {prevBookData?.data?.length > 0 && !searchTerm && (
        <div className="grid grid-cols-5 gap-10 mx-20">
          {prevBookData?.data.map((book) => (
            <BooksCard book={book}></BooksCard>
          ))}
        </div>
      )}
      {searchTerm && (
        <div className="grid grid-cols-5 gap-10 mx-20">
          {searchedBookData?.data.map((book) => (
            <BooksCard book={book}></BooksCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default LandingPage;
