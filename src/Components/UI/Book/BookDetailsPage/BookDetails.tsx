/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  useDeleteBookMutation,
  useGetSingleBookQuery,
  useUpdateReviewMutation,
} from "../../../../redux/features/product/productApi";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";

const BookDetails = () => {
  const { user } = useAppSelector((state) => state.user);
  const { id } = useParams();
  const { data } = useGetSingleBookQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

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
  const [updateReview] = useUpdateReviewMutation();

  const handlePostComment = async (event) => {
    event.preventDefault();
    const form = event.target;
    const comment = form.comment.value;
    console.log(comment);
    const commentData = {
      id: id,
      reviews: { reviews: comment },
    };
    console.log(commentData.reviews);
    await updateReview(commentData);
  };
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4  sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <Link to={`/edit-details/${id}`}>
              <button className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Update Details</span>
              </button>
            </Link>
            <button
              className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white"
              onClick={() => dispatch(deleteBook(id))}
            >
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
              <span className="relative"> Delete book</span>
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <img
              alt="Book"
              src={bookData?.image}
              className="w-[600px] h-[600px]"
            />

            <div className="mb-8">
              <article className="space-y-4 ">
                <span className="text-4xl font-bold ">{bookData?.title}</span>
              </article>
              <span className="text-2xl mt-8">Author: {bookData?.author}</span>
              <span className="block text-2xl mt-8">
                Genre: {bookData?.genre}
              </span>
              <span className="block text-2xl mt-8">
                Publication Date: {bookData?.publicationDate}
              </span>

              {user.email && (
                <form onSubmit={handlePostComment}>
                  <label className="text-gray-700" for="name">
                    <textarea
                      className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      id="comment"
                      placeholder="Enter your comment"
                      name="comment"
                      rows="5"
                      cols="40"
                    ></textarea>
                  </label>
                  <button className="px-3 py-1 bg-indigo-600">Submit</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookDetails;
