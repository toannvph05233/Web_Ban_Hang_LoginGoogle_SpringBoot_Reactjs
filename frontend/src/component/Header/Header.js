import {useState} from "react";

import Data from "./DataPages";
import Category from "./DataCategory";
import {NavLink, Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {useSelector} from "react-redux";

export default function Header() {
    const [showCategory, setShowCategory] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const navigate =useNavigate();
    const accessToken = localStorage.getItem("accessToken");
    const cart = useSelector((state) => state.cart.totalCart);

    const user = sessionStorage.getItem("user");

    const filteredData = Data.filter(data => {
        // Check if user from session is null and data.name is "trang cá nhân"
        return !(sessionStorage.getItem('user') === null && data.path === '/profile');
    });
    const toggleCategory = () => {
        setShowCategory(!showCategory);
    };
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:8080/api/v1/auth/logout');
            // Xóa token khỏi localStorage
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            sessionStorage.removeItem("user");
            console.log("Đã đăng xuất thành công");
            navigate('/'); // Chuyển hướng đến trang đăng nhập hoặc trang chính
        } catch (error) {
            console.error('Lỗi khi đăng xuất:', error);
        }
    }
    return (
        <div>
            <header>
                <div className="header-middle ptb-15">
                    <div className="container">
                        <div className="row align-items-center no-gutters">
                            <div className="col-lg-3 col-md-12">
                                <div className="logo mb-all-30">
                                    <a href="/Home"><img src="/assets/img/logo/logo.png" alt="logo-image"/></a>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-8 ml-auto mr-auto col-10">
                                <div className="categorie-search-box">
                                    <form action="search" method="post">

                                        <input type="text" name="txt" placeholder="Bạn muốn mua gì..."/>
                                        <button><i className="lnr lnr-magnifier"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="cart-box mt-all-30">
                                    <ul className="d-flex justify-content-lg-end justify-content-center align-items-center">
                                        <li className={"ml-3"}><Link to={"/cart"}  className={"ml-0"}><i
                                            className="lnr lnr-cart"></i><span
                                            className="my-cart"><span
                                            className="total-pro">{cart}</span><span>Giỏ hàng</span></span></Link>
                                        </li>
                                        {user == null ? <li >
                                                <Link to={"/login"} className={"ml-2"}>
                                                    <i className="lnr lnr-user"></i><span
                                                    className={"my-cart"}><span> <strong>Đăng nhập</strong></span><span> đăng kí</span></span>
                                                </Link>
                                            </li> :
                                            <>
                                                <li>
                                                    <Link  onClick={handleLogout} className={"ml-2"}>
                                                        <i className="lnr lnr-user"></i><span
                                                        className="my-cart"><span><strong></strong></span><span className={"mt-1"}><strong>Đăng xuất</strong></span></span>
                                                    </Link>

                                                </li>
                                                {user.role === "ADMIN" ?"":
                                                    <li>
                                                        <Link to={"/"} className={"ml-2"}><i
                                                            className="lnr lnr-pointer-right"></i><span
                                                            className="my-cart"><span></span><span className={"mt-1"}><strong>Vào admin</strong> </span></span>
                                                        </Link>

                                                    </li>
                                                }
                                            </>
                                        }


                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom  header-sticky">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-4 col-md-6 vertical-menu d-none d-lg-block"
                                 onClick={toggleCategory}>
                                <span className="categorie-title">Danh mục sản phẩm</span>
                            </div>
                            <div className="col-xl-9 col-lg-8 col-md-12 ">
                                <nav className="d-none d-lg-block">
                                    <ul className="header-bottom-list d-flex">
                                        {filteredData.map((data, index) => (
                                            <li>
                                                <NavLink key={index} to={data.path}>
                                                    {data.name}
                                                </NavLink>
                                            </li>

                                        ))}
                                    </ul>
                                </nav>
                                <div className="mobile-menu d-block d-lg-none mb-2" onClick={toggleMenu}>
                                    <br/>
                                    <br/>
                                    <nav>
                                        <ul className={`ml-3 ${showMenu ? '' : 'menu-hidden'}`}>
                                            {filteredData.map((data, index) => (
                                                <li>
                                                    <NavLink key={index} to={data.path}>
                                                        {data.name}
                                                    </NavLink>
                                                </li>

                                            ))}  </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container d-block d-lg-none">
                    <div className="vertical-menu mt-30">
                        <span className="categorie-title mobile-categorei-menu" onClick={toggleCategory}>Danh mục sản phẩm</span>
                        <nav>
                            <div id="cate-mobile-toggle"
                                 className={`category-menu sidebar-menu sidbar-style mobile-categorei-menu-list ${showCategory ? '' : 'menu-hidden'}`}>
                                <ul>
                                    {Category.map((data, index) => (
                                        <li>
                                            <NavLink key={index} to={data.path}>
                                                + {data.name}
                                            </NavLink>
                                        </li>

                                    ))}

                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 d-none d-lg-block">
                            <div className="vertical-menu mb-all-30">
                                <nav>
                                    <ul className={`vertical-menu-list ${showCategory ? '' : 'menu-hidden'} ml-3`}>

                                        {Category.map((data, index) => (
                                            <li>
                                                <NavLink key={index} to={data.path}>
                                                    + {data.name}
                                                </NavLink>
                                            </li>

                                        ))}

                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}