import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import Contact from "../pages/Contact/Contact";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ProductDetail from "../pages/ProductDetail/ProductDetail";

const Router = createBrowserRouter([{
    path: '/',
    element: <App/>,
    children: [
        {
            path: '/',
            element: <Home/>,

        },
        {
            path: '/login',
            element: <Login/>,

        },
        {
            path: '/register',
            element: <Register/>,

        },
        {
            path: '/products',
            element: <Product/>,

        },
        {
            path: '/products/:id',
            element: <ProductDetail/>,

        },
        {
            path: '/profile',
            element: <Profile/>,

        },
        {
            path: '/contact',
            element: <Contact/>,

        },

    ]

}])
export default Router