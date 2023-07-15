/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from "../../../redux/features/product/productApi";
import { FormEvent } from "react";
type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

const UpdateBook = () => {
  const { id } = useParams();
  const { data } = useGetSingleBookQuery(id);
  const bookData = data?.data[0];
  const { author, genre, publicationDate, title } = bookData;

  const [updateBook, { isLoading, isError, isSuccess }] =
    useUpdateBookMutation();

  const handleUpdateBookInfo = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target;
    const updateBookName = form.bookName.value;
    const updateAuthorName = form.authorName.value;
    const updateGenre = form.genre.value;
    const updatePublicationDate = form.publicationDate.value;

    const newData = {
      id: id,
      data: {
        title: updateBookName,
        author: updateAuthorName,
        genre: updateGenre,
        publicationDate: updatePublicationDate,
      },
    };
    console.log(newData);
    await updateBook(newData);
  };

  return (
    <div>
      <section className="h-screen bg-gray-100/50">
        <form
          onSubmit={handleUpdateBookInfo}
          className="container max-w-2xl mx-auto shadow-md md:w-3/4"
        >
          <div className="p-4 border-t-2 border-indigo-400 rounded-lg bg-gray-100/5 ">
            <div className="max-w-sm mx-auto md:w-full md:mx-0">
              <div className="inline-flex items-center space-x-4">
                <a href="#" className="relative block">
                  <img
                    alt="profil"
                    src="/images/person/1.jpg"
                    className="mx-auto object-cover rounded-full h-16 w-16 "
                  />
                </a>
                <h1 className="text-gray-600">Charlie</h1>
              </div>
            </div>
          </div>
          <div className="space-y-6 bg-white">
            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 className="max-w-sm mx-auto md:w-1/3">Book Name</h2>
              <div className="max-w-sm mx-auto md:w-2/3">
                <div className=" relative ">
                  <input
                    type="text"
                    name="bookName"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder={title}
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 className="max-w-sm mx-auto md:w-1/3">Other Info</h2>
              <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                <div>
                  <div className=" relative ">
                    <input
                      type="text"
                      id="user-info-name"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder={author}
                      name="authorName"
                    />
                  </div>
                </div>
                <div>
                  <div className=" relative ">
                    <input
                      type="text"
                      id="user-info-name"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder={genre}
                      name="genre"
                    />
                  </div>
                </div>
                <div>
                  <div className=" relative ">
                    <input
                      type="text"
                      id="user-info-phone"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder={publicationDate}
                      name="publicationDate"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
              <button
                type="submit"
                className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateBook;
