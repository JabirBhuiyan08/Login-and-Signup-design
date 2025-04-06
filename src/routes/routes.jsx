import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/Main";
import Login from "../Login/Login";
import SignUP from "../SignUp/SignUP";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
        children: [
             {
                path: "/",
                element: <Login></Login>,
             },
             {
                path: "signup",
                element: <SignUP></SignUP>,
             },
        ]
   }
]);