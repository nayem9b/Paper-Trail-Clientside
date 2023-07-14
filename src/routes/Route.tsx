import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import LandingPage from "../Components/Home/LandingPage";
import SignUpForm from "../Components/Auth/SignUpForm";
import LogInForm from "../Components/Auth/LoginForm";
import UpdateBook from "../Components/UI/Book/UpdateBook";
import AddBook from "../Components/UI/Book/AddBook";

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
        path: "/signUp",
        element: <SignUpForm></SignUpForm>,
      },
      {
        path: "/signin",
        element: <LogInForm></LogInForm>,
      },
      {
        path: "/update",
        element: <UpdateBook></UpdateBook>,
      },
      {
        path: "/addBook",
        element: <AddBook></AddBook>,
      },
    ],
  },
]);
