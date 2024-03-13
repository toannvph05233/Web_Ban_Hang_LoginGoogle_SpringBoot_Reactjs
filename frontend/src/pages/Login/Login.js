import Breadcrumb from "../../component/Breadcrumb/Breadcrumb";
import Footer from "../../component/Footer/Footer";
import {Link} from "react-router-dom";

const Login =()=>{

    return (<div className="wrapper">
        <Breadcrumb title={"Đăng nhập"}/>
        <div className="log-in ptb-100 ptb-sm-60">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="well mb-sm-30">
                            <div className="new-customer">
                                <h3 className="custom-title">ĐĂNG KÍ</h3>
                                <br/>
                                <p>Bằng cách tạo tài khoản, bạn sẽ có thể mua sắm nhanh hơn, cập nhật trạng thái đơn
                                    hàng và theo dõi các đơn hàng bạn đã thực hiện trước đó</p>
                                <Link to={"/register"} className="customer-btn">Tiếp tục</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="well">
                            <div className="return-customer">
                                <h3 className="mb-10 custom-title">ĐĂNG NHẬP</h3>
                                <br/>
                                <form action="Login" method="post">
                                    <div className="form-group">
                                        <label>Tài khoản</label>
                                        <input type="text" value=""
                                               name="username" placeholder="Nhập username..." id="input-email"
                                               className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Mật khẩu</label>
                                        <input type="password" value=""
                                               name="password" placeholder="Mật khẩu" id="input-password"
                                               className="form-control"/>
                                    </div>
                                    <p className="lost-password"><a href="forgot-password.jsp">Quên mật khẩu?</a></p>
                                    <input type="submit" value="Đăng nhập" className="return-customer-btn"/>
                                    <br/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>)
}
export default Login