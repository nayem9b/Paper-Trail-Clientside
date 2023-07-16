import React from "react";

const ReadlistCard = ({ wish }) => {
  const { title, author, genre, publicationDate, image, _id } = wish;
  return (
    <div>
      <div>
        <img
          src={image}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />

        <div className="relative border border-gray-100 bg-white p-6">
          <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>

          <p className="mt-1.5 text-sm text-gray-700">{author}</p>
        </div>
      </div>
    </div>
  );
};

export default ReadlistCard;
