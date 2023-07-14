import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import LandingPage from "../Components/Home/LandingPage";
import SignUpForm from "../Components/Auth/SignUpForm";

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
    ],
  },
]);
