import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Error from "../Pages/Error";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement : <Error></Error>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            }
        ]
    },
]);