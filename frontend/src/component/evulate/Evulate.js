
function Evulate(){


    return (
        <div id="review" className="tab-pane fade">

            <div className="review border-default universal-padding">
                <div className="group-title">
                    <h2>Đánh giá của khách hàng</h2>
                </div>
                <h4 className="review-mini-title">Truemart</h4>
                <ul className="review-list">

                    <li>
                        <span>Hạng</span>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <label>Truemart</label>
                    </li>

                    <li>
                        <span>Giá</span>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <label>Đánh giá bởi Truemart</label>
                    </li>

                    <li>
                        <span>Giá trị</span>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                        <label>Đăng vào 7/20/18</label>
                    </li>

                </ul>
            </div>

            <div className="review border-default universal-padding mt-30">
                <h2 className="review-title mb-30">Bạn đang đánh giá: <br/><span>sản phẩm tốt, nhưng giá hơi đắt.</span>
                </h2>
                <p className="review-mini-title">your rating</p>
                <ul className="review-list">

                    <li>
                        <span>Hạng</span>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                    </li>

                    <li>
                        <span>Giá</span>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                    </li>

                    <li>
                        <span>Giá trị</span>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                    </li>

                </ul>

                <div className="riview-field mt-40">
                    <form autoComplete="off" action="#">
                        <div className="form-group">
                            <label className="req" htmlFor="sure-name">Tên tài
                                khoản</label>
                            <input type="text" className="form-control" id="sure-name"
                                   required="required"/>
                        </div>
                        <div className="form-group">
                            <label className="req" htmlFor="subject">Bảng tóm
                                tắt</label>
                            <input type="text" className="form-control" id="subject"
                                   required="required"/>
                        </div>
                        <div className="form-group">
                            <label className="req" htmlFor="comments">Đánh giá</label>
                            <textarea className="form-control" rows="5" id="comments"
                                      required="required"></textarea>
                        </div>
                        <button type="submit" className="customer-btn">Gửi</button>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default Evulate