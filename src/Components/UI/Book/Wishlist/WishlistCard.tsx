import React, { useState } from "react";
import { useUpdateWishlistMutation } from "../../../../redux/features/product/productApi";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const WishlistCard = ({ wish }) => {
  const { title, author, genre, publicationDate, image, _id } = wish;
  const navigate = useNavigate();
  const [updateWishlist] = useUpdateWishlistMutation();

  // const handleAddStatus = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const status = form.reading.textContent;
  //   console.log(status);
  // };

  const setWillReadStatusToDB = async () => {
    const updatedData = {
      id: _id,
      status: "will read",
    };
    await updateWishlist(updatedData);
    toast.success("Updated your status");
    navigate("/readlist");
  };
  const setReadingStatusToDB = async () => {
    const updatedData = {
      id: _id,
      status: "reading",
    };
    await updateWishlist(updatedData);
    toast.success("Updated your status");
    navigate("/readlist");
  };
  const setFinishedStatusToDB = async () => {
    const updatedData = {
      id: _id,
      status: "finished",
    };
    console.log(updatedData);
    await updateWishlist(updatedData);
    toast.success("Updated your status");
    navigate("/readlist");
  };

  return (
    <div>
      <img
        src={image}
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
      />

      <div className="relative border border-gray-100 bg-white p-6">
        <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
          New
        </span>

        <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>

        <p className="mt-1.5 text-sm text-gray-700">{author}</p>

        <div className="flex gap-3">
          <button
            className="block w-full rounded text-white bg-zinc-400 px-2 py-1  text-sm font-medium transition hover:scale-105"
            name="will read"
            onClick={() => setWillReadStatusToDB()}
          >
            will read
          </button>
          <button
            className="block w-full rounded text-white bg-green-400 px-2 py-1 text-sm font-medium transition hover:scale-105"
            name="reading"
            onClick={() => setReadingStatusToDB()}
          >
            reading
          </button>
          <button
            className="block w-full rounded bg-indigo-400 text-white px-2 py-1 text-sm font-medium transition hover:scale-105"
            name="finished"
            onClick={() => setFinishedStatusToDB()}
          >
            finished
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
