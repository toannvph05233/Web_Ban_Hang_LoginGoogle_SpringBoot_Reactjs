import Breadcrumb from "../../component/Breadcrumb/Breadcrumb";
import Footer from "../../component/Footer/Footer";

const Register = () => {
    return (
        <>
            <Breadcrumb title={"Đăng ký"}/>
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
                            <form class="form-register" method="post" action="register">
                                <fieldset>
                                    <legend>Thông tin cá nhân</legend>
                                    <div class="form-group d-md-flex align-items-md-center">
                                        <label class="control-label col-md-2" for="f-name"><span class="require">*</span>Họ và Tên</label>
                                        <div class="col-md-10">
                                            <input type="text" class="form-control" value="" name="name" id="f-name" placeholder="Vui lòng nhập họ và tên.."/>
                                        </div>
                                    </div>
                                    <div class="form-group d-md-flex align-items-md-center">
                                        <label class="control-label col-md-2" for="l-name"><span class="require">*</span>Tên đăng nhập </label>
                                        <div class="col-md-10">
                                            <input type="text" class="form-control" id="l-name"value="" name="username" placeholder="vui lòng nhập tên"/>
                                        </div>
                                    </div>
                                    <div class="form-group d-md-flex align-items-md-center">
                                        <label class="control-label col-md-2" for="email"><span class="require">*</span>Email</label>
                                        <div class="col-md-10">
                                            <input type="email" class="form-control"value="" name="email" id="email" placeholder="Nhập địa chỉ email..."/>
                                        </div>
                                    </div>
                                    <div class="form-group d-md-flex align-items-md-center">
                                        <label class="control-label col-md-2" for="number"><span class="require">*</span>Số điện thoại</label>
                                        <div class="col-md-10">
                                            <input type="text" class="form-control" value="" name="phone" id="number" placeholder="Số điện thoại"/>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend>Cài đặt mật khẩu</legend>
                                    <div class="form-group d-md-flex align-items-md-center">
                                        <label class="control-label col-md-2" for="pwd"><span class="require">*</span>Mật khẩu:</label>
                                        <div class="col-md-10">
                                            <input type="password" class="form-control" value="" name="password" id="pwd" placeholder="Mật khẩu"/>
                                        </div>
                                    </div>
                                    <div class="form-group d-md-flex align-items-md-center">
                                        <label class="control-label col-md-2" for="pwd-confirm"><span class="require">*</span>Xác nhận mật khẩu</label>
                                        <div class="col-md-10">
                                            <input type="password" class="form-control" id="pwd-confirm" placeholder="Nhập lại mật khẩu..."/>
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