import React from "react";
import { Link } from "react-router-dom";

const BooksCard = ({ book }) => {
  return (
    <div>
      <Link to={`/book-details/${book._id}`}>
        <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt="Office"
            src={book.image}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6">
              {/* <time datetime="2022-10-10" className="block text-xs text-white/90">
              10th Oct 2022
            </time> */}

              <a href="#">
                <h3 className="mt-0.5 text-lg text-white">{book.title}</h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>
            </div>
          </div>
        </article>
      </Link>
    </div>
  );
};

export default BooksCard;
