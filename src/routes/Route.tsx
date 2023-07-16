import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import LandingPage from "../Components/Home/LandingPage";
import SignUpForm from "../Components/Auth/SignUpForm";
import LogInForm from "../Components/Auth/LoginForm";
import UpdateBook from "../Components/UI/Book/EditBookDetails";
import AddBook from "../Components/UI/Book/AddBook";
import BookDetails from "../Components/UI/Book/BookDetailsPage/BookDetails";
import Wishlist from "../Components/UI/Book/Wishlist/Wishlist";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <LandingPage></LandingPage>,
      },
      {
        path: "/wishlist",
        element: <Wishlist></Wishlist>,
      },
      {
        path: "/signUp",
        element: <SignUpForm></SignUpForm>,
      },
      {
        path: "/signin",
        element: <LogInForm></LogInForm>,
      },
      {
        path: "/addBook",
        element: <AddBook></AddBook>,
      },
      {
        path: "/book-details/:id",
        element: <BookDetails></BookDetails>,
      },
      {
        path: "/edit-details/:id",
        element: <UpdateBook></UpdateBook>,
      },
    ],
  },
]);
