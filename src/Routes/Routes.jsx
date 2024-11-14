import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Order from "../Pages/Order";
import OrderReview from "../Pages/OrderReview";
import ManageInventory from "../Pages/ManageInventory";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import OrderNow from "../Pages/OrderNow";
import AddService from "../Pages/AddService";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement : <Error></Error>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "/order",
                element : <Order></Order>
            },
            {
                path : "/orderReview",
                element : <OrderReview></OrderReview>
            },
            {
                path : "/manageInventory",
                element : <ManageInventory></ManageInventory>
            },
            {
                path : "/login",
                element : <Login></Login>
            },
            {
                path : "/signUp",
                element : <SignUp></SignUp>
            },
            {
                path : `/orderNow/:id`,
                element : <OrderNow></OrderNow>,
                loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path : '/addService',
                element : <AddService></AddService>
            }
        ]
    },
],
{
    future: {
    v7_startTransition: true,
    v7_skipActionErrorRevalidation: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    },
    }
);