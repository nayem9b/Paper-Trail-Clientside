/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useDeleteBookMutation,
  useGetSingleBookQuery,
  usePostWishlistMutation,
  useUpdateReviewMutation,
} from "../../../../redux/features/product/productApi";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { toast } from "react-hot-toast";

const BookDetails = () => {
  const { user } = useAppSelector((state) => state.user);
  const { id } = useParams();
  const { data } = useGetSingleBookQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [deleteBook, { isLoading, isError, isSuccess }] =
    useDeleteBookMutation();
  const [postWishlist] = usePostWishlistMutation();
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
    toast.success("Review added");
    form.reset();
  };

  const handleAddToWishlist = async () => {
    const wishListInfo = {
      title: bookData?.title,
      author: bookData?.author,
      publicationDate: bookData?.publicationDate,
      genre: bookData?.genre,
      image: bookData?.image,
      user: user?.email,
    };
    await postWishlist(wishListInfo);
    toast.success("Added to wishlist");
    navigate("/wishlist");
  };

  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4  sm:px-6 sm:py-24 lg:px-8">
          {bookData?.postedBy === user.email && (
            <div className="max-w-3xl flex gap-5">
              <Link to={`/edit-details/${id}`}>
                <button className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative">Update Details</span>
                </button>
              </Link>
              <button
                className="btn bg-red-400"
                onClick={() => window.my_modal_5.showModal()}
              >
                Delete Book
              </button>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <form method="dialog" className="modal-box">
                  <p className="py-4">You sure, you want to delete this?</p>
                  <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <button
                      className="btn bg-red-500 text-white hover:bg-red-700"
                      onClick={() => dispatch(deleteBook(id))}
                    >
                      sure, confirm delation
                    </button>
                    <button className="btn">Close</button>
                  </div>
                </form>
              </dialog>
              <button
                className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white"
                onClick={handleAddToWishlist}
              >
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                <span className="relative"> Wishlist</span>
              </button>
              {/* Open the modal using ID.showModal() method */}
            </div>
          )}

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
                      className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mt-5"
                      id="comment"
                      placeholder="Enter your comment"
                      name="comment"
                      rows="5"
                      cols="40"
                    ></textarea>
                  </label>
                  <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white">
                    Submit
                  </button>
                </form>
              )}
              <article className="flex flex-col gap-4 rounded-lg mt-10 ">
                <h1 className="text-3xl font-bold">Reviews ✨</h1>
                <div>
                  {bookData?.reviews.length > 0 ? (
                    <div>
                      <strong className="block text-sm font-medium text-gray-500">
                        {" "}
                        Anonymous User:{" "}
                      </strong>
                      <span className="text-2xl font-medium text-gray-900">
                        {bookData?.reviews}
                      </span>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookDetails;
