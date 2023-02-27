import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/closed/Home/Home";

import Order from "../pages/closed/Order/Order";

import UserAuth from "../pages/closed/UserAuth/UserAuth";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <PrivateRoute><Home></Home></PrivateRoute>
            },
            {
                path: '/order',
                element: <PrivateRoute><Order></Order></PrivateRoute>
            },
            {
                path: '/login',
                element: <UserAuth></UserAuth>
            },
           
        ]
    }
])