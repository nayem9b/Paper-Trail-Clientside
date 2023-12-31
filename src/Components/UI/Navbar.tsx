/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase";
import { setUser } from "../../redux/features/user/userSlice";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  // const [enabled, setEnabled] = useState(false);
  // const handleSearch = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const search = form.search.value;

  //   setSearch(search);
  //   console.log(search);
  // };
  // // dispatch()
  // const { data, isLoading, isError } = useGetSearchedBooksQuery(search);

  // console.log(data);

  const handleLogout = () => {
    signOut(auth).then(() => {
      dispatch(setUser(null));
    });
  };

  return (
    <div>
      <div>
        <div className="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  rounded-3xl">
          <div className="relative  flex items-center justify-between">
            <Link
              to="/"
              aria-label="Company"
              title="Anonna`s Kitchen"
              className="inline-flex items-center"
            >
              <img className="w-10 h-15" alt=""></img>

              <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                Paper Trails
              </span>
            </Link>
            {/* Search Field */}
            <div className="relative"></div>
            <ul className=" items-center hidden space-x-8 lg:flex">
              <li>
                <Link
                  to="/"
                  className="text-lg font-semibold"
                  aria-label="Sign In"
                  title="All books"
                >
                  All Books
                </Link>
              </li>
              {user.email ? (
                <>
                  <li>
                    <Link
                      to="/addBook"
                      aria-label="About us"
                      title="Blogs"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      Add a book
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/wishlist`}
                      aria-label="About us"
                      title="Blogs"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      Wishlist
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/readlist`}
                      aria-label="About us"
                      title="Blogs"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      Readlist
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={handleLogout}
                      to="/"
                      className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      aria-label="Log out"
                      title="Log out"
                    >
                      Log out
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/signin"
                      className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none "
                      aria-label="Sign In"
                      title="Sign In"
                    >
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signup"
                      className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide bg-black text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      aria-label="Sign up"
                      title="Sign up"
                    >
                      Sign up
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <div className="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className="absolute z-20 top-0 left-0 w-full">
                  <div className="p-5 bg-white border rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <a
                          href="/"
                          aria-label="Anonna`s Kitchen"
                          title="Anonna`s Kitchen"
                          className="inline-flex items-center"
                        >
                          <img
                            className="w-10 h-15"
                            // src={navicon}
                            alt="Anonna`s Kitchen"
                          />
                          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                            Paper trails
                          </span>
                        </a>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg
                            className="w-5 text-gray-600"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4">
                        <li>
                          <Link
                            to="/"
                            aria-label="Our product"
                            title="Home"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/blogs"
                            aria-label="Our product"
                            title="Home"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Blog
                          </Link>
                        </li>

                        <>
                          <li>
                            <Link
                              to="/myreviews"
                              aria-label="My Reviews"
                              title="My Reviews"
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              My Reviews
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/addservices"
                              aria-label="add services"
                              title="Add Services"
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Add Services
                            </Link>
                          </li>{" "}
                          {user.email && (
                            <Link
                              onClick={handleLogout}
                              to="/"
                              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide bg-black text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                              aria-label="Log out"
                              title="Log out"
                            >
                              Log out
                            </Link>
                          )}
                        </>

                        <>
                          {" "}
                          <li>
                            <Link
                              to="/signup"
                              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                              aria-label="Sign up"
                              title="Sign up"
                            >
                              Sign up
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/signin"
                              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide bg-black text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                              aria-label="Sign in"
                              title="Sign in"
                            >
                              Sign in
                            </Link>
                          </li>
                        </>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
