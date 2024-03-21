import {useState} from "react";

function Comments(){
    const [replyFormVisible, setReplyFormVisible] = useState(false);
    const handleReplyButtonClick = () => {
        setReplyFormVisible(!replyFormVisible); // Đảo ngược trạng thái hiển thị form trả lời
    };


    return (
        <div id="comment" className="tab-pane fade">

            <div className="review border-default universal-padding">
                <div className="group-title">
                    <h2>Thêm bình luận</h2>
                </div>
                <div className="riview-field mt-40">
                    <form autoComplete="off" action="#">

                        <div className="form-group">
                            <label className="req" htmlFor="comments">Bình luận</label>
                            <textarea className="form-control" rows="5" id="comments"
                                      required="required"></textarea>
                        </div>
                        <button type="submit" className="customer-btn">Gửi</button>
                    </form>
                </div>
            </div>

            <div className="review border-default universal-padding mt-30">
                <h2 className="review-title mb-30">Bình luận của khách hàng
                </h2>


                <div className="riview-field mt-40">
                    <div id="existing-comments">

                        <h2 className="review-title mb-30">Người bình
                            luận: <br/><span>sản phẩm tốt, nhưng giá hơi đắt.</span>
                        </h2>
                        <button className="reply-btn" onClick={handleReplyButtonClick}>Trả lời</button>
                        {replyFormVisible && (
                            <div className="reply-form">
                                <textarea className="form-control" rows="2" placeholder="Viết phản hồi..."></textarea>
                                <button className="reply-submit-btn customer-btn mt-10">Gửi</button>
                            </div>
                        )}

                    </div>


                </div>

            </div>

        </div>
    )
}

export default Comments