import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../component/pages/Home/Home";
import Product from "../component/pages/Product/Product";
import Contact from "../component/pages/Contact/Contact";
import Profile from "../component/pages/Profile/Profile";

const Router = createBrowserRouter([{
    path: '/',
    element: <App/>,
    children: [
        {
            path: '/',
            element: <Home/>,

        },
        {
            path: '/products',
            element: <Product/>,

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