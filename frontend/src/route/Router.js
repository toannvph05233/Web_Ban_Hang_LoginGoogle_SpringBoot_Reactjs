import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import Contact from "../pages/Contact/Contact";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Cart from "../pages/Cart/Cart";
import MyOrder from "../pages/MyOrder/MyOrder";

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
            path: '/my_order',
            element: <MyOrder/>,

        },
        {
            path: '/contact',
            element: <Contact/>,

        },
        {
            path: '/cart',
            element: <Cart/>,

        },

    ]

}])
export default Router
