/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react";
import { FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useAppSelector } from "../../../redux/hooks";
import { usePostBookMutation } from "../../../redux/features/product/productApi";
import { useNavigate } from "react-router-dom";
type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

const AddBook = () => {
  const { user } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const [postBook, { isError, isLoading, isSuccess }] = usePostBookMutation();
  const handleAddABook = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target;
    const bookName = form.bookName.value;
    const authorName = form.authorName.value;
    const genre = form.genre.value;
    const publicationDate = form.publicationDate.value;
    console.log(bookName);

    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_APP_IMG_BB_KEY
    }`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const BooksInfo = {
            title: bookName,
            author: authorName,
            genre: genre,
            publicationDate: publicationDate,
            postedBy: user.email,
            image: imgData.data.url,
          };
          try {
            postBook(BooksInfo);
            toast.success("Book Added successfully");
            navigate("/");
          } catch (error) {
            console.log(error);
          }
        } else {
          console.log(imgData);
        }
      });
  };
  return (
    <div>
      <section className="h-screen bg-gray-100/50 mt-20">
        <form
          onSubmit={handleAddABook}
          className="container max-w-2xl mx-auto shadow-md md:w-3/4"
        >
          <div className="p-4 border-t-2 rounded-lg bg-gray-100/5 ">
            <div className="max-w-sm mx-auto md:w-full md:mx-0">
              <div className="inline-flex items-center space-x-4">
                <h1 className="text-center text-4xl font-bold text-blue-600 mx-auto">
                  Add a book
                </h1>
              </div>
            </div>
          </div>
          <div className="space-y-6 bg-white">
            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 className="max-w-sm mx-auto md:w-1/3">Book Name:</h2>
              <div className="max-w-sm mx-auto md:w-2/3">
                <div className=" relative ">
                  <input
                    type="text"
                    name="bookName"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Title"
                  />
                </div>
              </div>
            </div>
            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 className="max-w-sm mx-auto md:w-1/3">Author:</h2>
              <div className="max-w-sm mx-auto md:w-2/3">
                <div className=" relative ">
                  <input
                    type="text"
                    name="authorName"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Author"
                  />
                </div>
              </div>
            </div>
            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 className="max-w-sm mx-auto md:w-1/3">Genre:</h2>
              <div className="max-w-sm mx-auto md:w-2/3">
                <div className=" relative ">
                  <input
                    type="text"
                    name="genre"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Genre"
                  />
                </div>
              </div>
            </div>
            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 className="max-w-sm mx-auto md:w-1/3">Publication Date:</h2>
              <div className="max-w-sm mx-auto md:w-2/3">
                <div className=" relative ">
                  <input
                    type="text"
                    name="publicationDate"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Publication Date"
                  />
                </div>
              </div>
            </div>
            <div className="items-start w-full p-8  text-gray-500 md:inline-flex md:space-y-0">
              <h2 className="max-w-sm mx-auto md:w-4/12">Book's Cover</h2>

              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
                name="image"
                accept="image/*"
                required
              />
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

export default AddBook;

<div className="items-center w-full p-8 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
  <h2 className="max-w-sm mx-auto md:w-4/12">Book's Cover</h2>

  <input
    type="file"
    className="file-input file-input-bordered w-full max-w-xs"
    name="image"
    accept="image/*"
    required
  />
</div>;
