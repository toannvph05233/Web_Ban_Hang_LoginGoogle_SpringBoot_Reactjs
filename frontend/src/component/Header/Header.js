import {useState} from "react";

import Data from "./DataPages";
import Category from "./DataCategory";
import {NavLink} from "react-router-dom";

export default function Header() {
    const [showCategory, setShowCategory] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const toggleCategory = () => {
        setShowCategory(!showCategory);
    };
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
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
                                        <li className={"ml-3"}><a href="Cart" className={"ml-3"}><i
                                            className="lnr lnr-cart"></i><span
                                            className="my-cart"><span
                                            className="total-pro">1</span><span>Giỏ hàng</span></span></a>
                                        </li>
                                        <li><a href="logout" className={"ml-3"}><i className="lnr lnr-user"></i><span
                                            className="my-cart"><span><strong></strong></span><span>đăng xuất</span></span></a>

                                        </li>

                                        <li><a href="ListProductAd" className={"ml-3"}><i
                                            className="lnr lnr-pointer-right"></i><span
                                            className="my-cart"><span><strong></strong></span><span>vào admin</span></span></a>

                                        </li>
                                        <li><a href="login.jsp" className={"ml-3"}><i className="lnr lnr-user"></i><span
                                            className="my-cart"><span> <strong>Đăng nhập</strong></span><span> đăng kí</span></span></a>
                                        </li>
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
                                        {Data.map((data, index) => (
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
                                            {Data.map((data, index) => (
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
            <div className="main-page-banner pb-50 off-white-bg">
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
        </div>
    )
}