import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import React from "react";
import RegisterForm from "../common/auth/Register";
import LoginForm from "../common/auth/Login";
import NavbarMenu from "../common/customer/Navbar";
import HomePage from "../common/customer/Home";
import ProcedurePage from "../common/customer/Procedure";
import FormPage from "../common/customer/Form";
import FooterPage from "../common/customer/Footer";
import AboutPage from "../common/customer/About_us";
import QuizPage from "../common/customer/Quiz";
import LogoutPage from "../common/customer/Logout";
import QuizpromptPage from "../common/customer/Quizprompt";
import ScorecardPage from "../common/customer/Scorecard";
import CoursedirectoryPage from "../common/customer/Coursedirectory";
import SchooldirectoryPage from "../common/customer/Schooldirectory";
import CollegedirectoryPage from "../common/customer/Collegedirectory";
import AwardPage from "../common/customer/Award";
import MeritcollegePage from "../common/customer/Meritcollege";
import MeritschoolPage from "../common/customer/Meritschool";
import ResourcesPage from "../common/customer/Resources";
import ServicesPage from "../common/customer/Services";
import ForgetPage from "../common/customer/Forget";

const Layout = ({ children }) => (
    <>
        <NavbarMenu />
        <div>{children}</div>
        <FooterPage />
    </>
);

const MainRouter = () => {
    const routesData = createBrowserRouter([
        {
            path: "/",
            element: <Navigate to="/Login" replace />, 
        },
        {
            path: "/Home",
            element: <Layout><HomePage /></Layout>,
            errorElement: <h1>Error</h1>,
        },
        {
            path: "/Procedure",
            element: <Layout><ProcedurePage /></Layout>,
            errorElement: <h1>Error</h1>,
        },
        {
            path: "/Resources",
            element: <Layout><ResourcesPage /></Layout>,
            errorElement: <h1>Error</h1>,
        },
        {
            path: "/About_us",
            element: <Layout><AboutPage /></Layout>,
            errorElement: <h1>Error</h1>,
        },
        {
            path: "/Services",
            element: <Layout><ServicesPage /></Layout>,
            errorElement: <h1>Error</h1>,
        },
        {
            path: "/Register",
            element: <RegisterForm />, 
            errorElement: <h1>Error</h1>,
        },
        {
            path: "/Login",
            element: <LoginForm />, 
            errorElement: <h1>Error</h1>,
        },
        {
            path: "/Form",
            element: <FormPage />, 
            errorElement: <h1>Error</h1>,
        },
        {
            path: "/Quiz",
            element: <QuizPage />, 
            errorElement: <h1>Error</h1>,
        },
        {
            path: "/Logout",
            element: <LogoutPage />, 
            errorElement: <h1>Error</h1>,
        },
        {
            path: "/Quizprompt",
            element: <QuizpromptPage />, 
            errorElement: <h1>Error</h1>,
        },
        {
            path: "/Scorecard",
            element: <ScorecardPage />, 
            errorElement: <h1>Error</h1>,
        },
        {
            path: "/Coursedirectory",
            element: <CoursedirectoryPage />, 
            errorElement: <h1>Error</h1>,
        },
        {
            path: "/Schooldirectory",
            element: <SchooldirectoryPage />, 
            errorElement: <h1>Error</h1>,
        },
        {
            path: "/Collegedirectory",
            element: <CollegedirectoryPage />, 
            errorElement: <h1>Error</h1>,
        },
        {
            path: "/Award",
            element: <AwardPage />, 
            errorElement: <h1>Error</h1>,
        },
        {
            path: "/Meritcollege",
            element: <MeritcollegePage />, 
            errorElement: <h1>Error</h1>,
        },
        {
            path: "/Meritschool",
            element: <MeritschoolPage />, 
            errorElement: <h1>Error</h1>,
        },
        {
            path: "/Forget",
            element: <ForgetPage />, 
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
