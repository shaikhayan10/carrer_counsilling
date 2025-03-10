import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import RegisterForm from "../common/auth/Register";
import React from "react";

const MainRouter = () => {
    const routesData = createBrowserRouter([
        {
            path: "/Register",
            element: <RegisterForm />,
            errorElement: <h1>Error</h1>,
        },
    ]);

    return (
        <React.Fragment>
            <RouterProvider router={routesData} />
        </React.Fragment>
    );
};

export default MainRouter;
