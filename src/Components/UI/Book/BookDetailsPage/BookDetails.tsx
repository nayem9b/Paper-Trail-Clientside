/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  useDeleteBookMutation,
  useGetSingleBookQuery,
} from "../../../../redux/features/product/productApi";
import { useAppDispatch } from "../../../../redux/hooks";

const BookDetails = () => {
  const { id } = useParams();
  const { data } = useGetSingleBookQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });
  console.log(id);
  const dispatch = useAppDispatch();
  const [deleteBook, { isLoading, isError, isSuccess }] =
    useDeleteBookMutation();
  const bookData = data?.data[0];
  console.log(bookData);
  // const handleDelete = async (id?: string) => {
  //   console.log(id);
  //   console.log(deleteBook);
  //   dispatch(deleteBook(id));
  // };

  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4  sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              {bookData?.author}
            </h2>
            <Link to={`/edit-details/${id}`}>Update Book Details</Link>
            <button onClick={() => dispatch(deleteBook(id))}>
              {" "}
              Delete book
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img
                alt="product"
                src={bookData?.image}
                className="w-[600px] h-96"
              />
            </div>

            <div className="relative">
              <article className="space-y-4 ">
                <p className="text-4xl font-semibold">
                  <span className="text-4xl font-bold ml-2">₹</span>
                  {/* {data.data.genre} */}
                </p>
                {/* <p>{description}</p> */}
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookDetails;
