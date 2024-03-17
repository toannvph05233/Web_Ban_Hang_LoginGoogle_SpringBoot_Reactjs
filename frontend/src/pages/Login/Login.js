import Breadcrumb from "../../component/Breadcrumb/Breadcrumb";
import Footer from "../../component/Footer/Footer";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {useState} from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/login', {email, password});
            // Lưu access token vào localStorage hoặc Redux store
            const accessToken = response.data.access_token;
            const refeshToken = response.data.refresh_token;
            const user = response.data.user;
            // eslint-disable-next-line react-hooks/rules-of-hooks


            // Lưu access token vào localStorage
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refeshToken', refeshToken);

            sessionStorage.setItem("user", user);

            console.log('Access token:', accessToken);
            console.log('Refesh token:', response.data.access_token);
            console.log('User:', response.data.user);
            navigate("/products")
        } catch (error) {
            setError(error)
            console.error('Đăng nhập thất bại:', error);
        }
    };
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
                                <form onSubmit={handleLogin} encType={password}>
                                    <div className="form-group">
                                        <label>Tài khoản</label>
                                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}
                                               name="email" placeholder="Nhập username..." id="input-email"
                                               className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Mật khẩu</label>
                                        <input type="password" value={password}
                                               onChange={(e) => setPassword(e.target.value)}
                                               name="password" placeholder="Mật khẩu" id="input-password"
                                               className="form-control"/>
                                    </div>
                                    {error && <p style={{color: 'red'}}>{error}</p>}
                                    <p className="lost-password"><a href="">Quên mật khẩu?</a></p>
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