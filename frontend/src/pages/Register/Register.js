import Breadcrumb from "../../component/Breadcrumb/Breadcrumb";
import Footer from "../../component/Footer/Footer";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import axios from "axios";

const Register = () => {
    const [fullname, setFullname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showConfirm, setShowConfirm] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Kiểm tra ràng buộc của phoneNumber
        if (phoneNumber.length < 10) {
            setError('Số điện thoại phải có ít nhất 10 số');
            return;
        }

        // Kiểm tra ràng buộc của password
        if (password.length < 8) {
            setError('Mật khẩu phải có ít nhất 8 ký tự');
            return;
        }

        // Kiểm tra ràng buộc của confirmPassword
        if (password !== confirmPassword) {
            setError('Mật khẩu xác nhận không khớp');
            return;
        }

        const data = JSON.stringify({
            fullname,
            email,
            password,
            phoneNumber,
            role: "USER"
        });

        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/register', data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            console.log(response.data);
            navigate('/login');
        } catch (error) {
            setError('Đăng ký thất bại');
        }
    };
    return (
        <>
            <Breadcrumb title={"Đăng k  ý"}/>
            <div class="register-account ptb-100 ptb-sm-60">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="register-title">
                                <h3 class="mb-10">ĐĂNG KÍ TÀI KHOẢN</h3>
                                <p class="mb-10">Nếu bạn chưa có tài khoản, vui lòng đăng kí tại đây.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            {error && <p style={{color: 'red'}}>{error}</p>}
                            <form class="form-register" onSubmit={handleSubmit}>
                                <fieldset>
                                    <legend>Thông tin cá nhân</legend>
                                    <div class="form-group d-md-flex align-items-md-center">
                                        <label class="control-label col-md-2" for="f-name"><span
                                            class="require">*</span>Họ và Tên</label>
                                        <div class="col-md-10">
                                            <input type="text" class="form-control" value={fullname}
                                                   onChange={(e) => setFullname(e.target.value)}
                                                   required name="name" id="f-name"
                                                   placeholder="Vui lòng nhập họ và tên.."/>
                                        </div>
                                    </div>
                                    <div class="form-group d-md-flex align-items-md-center">
                                        <label class="control-label col-md-2" for="email"><span class="require">*</span>Email</label>
                                        <div class="col-md-10">
                                            <input type="email" class="form-control" value={email}
                                                   onChange={(e) => setEmail(e.target.value)}
                                                   required name="email" id="email"
                                                   placeholder="Nhập địa chỉ email..."/>
                                        </div>
                                    </div>
                                    <div class="form-group d-md-flex align-items-md-center">
                                        <label class="control-label col-md-2" for="number"><span
                                            class="require">*</span>Số điện thoại</label>
                                        <div class="col-md-10">
                                            <input type="text" class="form-control" value={phoneNumber}
                                                   onChange={(e) => setPhoneNumber(e.target.value)}
                                                   required name="phone" id="number" placeholder="Số điện thoại"/>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend>Cài đặt mật khẩu</legend>
                                    <div className="form-group d-md-flex align-items-md-center">
                                        <label class="control-label col-md-2" for="pwd"><span class="require">*</span>Mật
                                            khẩu:</label>
                                        <div className="col-md-9">
                                            <input  type={showPassword ? "text" : "password"}
                                                    value={password}
                                                   onChange={(e) => setPassword(e.target.value)}
                                                   required className="form-control" name="password" id="pwd"
                                                   placeholder="Mật khẩu"/>

                                        </div>
                                        <div className="col-md-1">
                                            <button className="form-control"
                                                    onClick={() => setShowPassword(!showPassword)}>
                                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye}/>
                                            </button>
                                        </div>

                                    </div>
                                    <div class="form-group d-md-flex align-items-md-center">
                                        <label class="control-label col-md-2" for="pwd-confirm"><span
                                            >*</span>Xác nhận mật khẩu</label>
                                        <div class="col-md-9">
                                            <input type={showConfirm ? "text" : "password"}  id="pwd-confirm"
                                                   onChange={(e) => setConfirmPassword(e.target.value)}
                                                   required className="form-control"
                                                   placeholder="Nhập lại mật khẩu..."/>
                                        </div>
                                        <div className="col-md-1">
                                            <button className="form-control"
                                                    onClick={() => setShowConfirm(!showConfirm)}>
                                                <FontAwesomeIcon icon={showConfirm ? faEyeSlash : faEye}/>
                                            </button>
                                        </div>
                                    </div>

                                </fieldset>

                                <div class="terms">
                                    <div class="float-md-right">
                                        <span>Tôi đã đọc và đồng ý <a href="#" class="agree"><b>chính sách bảo mật của cửa hàng</b></a></span>
                                        <input type="checkbox" name="agree" value="1"/> &nbsp;
                                        <input type="submit" value="Tiếp tục" class="return-customer-btn"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Register