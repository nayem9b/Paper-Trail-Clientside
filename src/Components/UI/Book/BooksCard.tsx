/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Link } from "react-router-dom";

const BooksCard = ({ book }: any) => {
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
              <h3 className="mt-0.5 text-xl text-white">{book.title}</h3>

              <p className="line-clamp-3 text-sm/relaxed text-white/95">
                Author: {book?.author}
              </p>
              <p className="line-clamp-3 text-sm/relaxed text-white/95">
                Genre: {book?.genre}
              </p>
              <p className="line-clamp-3 text-sm/relaxed text-white/95">
                Publication Date: {book?.publicationDate}
              </p>
            </div>
          </div>
        </article>
      </Link>
    </div>
  );
};

export default BooksCard;
