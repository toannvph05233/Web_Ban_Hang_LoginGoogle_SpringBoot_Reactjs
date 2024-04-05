import {useEffect, useState} from "react";
import axios from "axios";

function Comments({productId}) {
    const [replyFormVisible, setReplyFormVisible] = useState(false);


    const [comments, setComments] = useState([]);
    const [idParent, setIdParent] = useState(0);
    const [newComment, setNewComment] = useState("");
    const [newCommentChild, setNewCommentChild] = useState("");

    useEffect(() => {
        // Hàm gọi API để lấy dữ liệu bình luận khi component được tải lần đầu
        fetchComments();
    }, []); // Tham số thứ hai là một mảng rỗng, đảm bảo useEffect chỉ chạy một lần khi component được tải lần đầu

    async function fetchComments() {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/${productId}/comments`);
            setComments(response.data);
            console.log(response.data)
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    }

    // Xử lý khi người dùng gửi bình luận mới
    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = JSON.parse(sessionStorage.getItem("user")).email;
        const obj = {content: newComment, email: email}
        try {
            // Gửi dữ liệu bình luận mới đến API để lưu trữ
            const response = await axios.post(`http://localhost:8080/api/v1/${productId}/comments`, obj);
            setNewComment("");
            fetchComments();
        } catch (error) {
            console.error("Error adding comment:", error);
        }
    };

    const handleSubmitChild = async (event) => {
        event.preventDefault();
        const email = JSON.parse(sessionStorage.getItem("user")).email;
        const obj = {content: newCommentChild, email: email}

        try {
            // Gửi dữ liệu bình luận mới đến API để lưu trữ
            const response = await axios.post(`http://localhost:8080/api/v1/${idParent}/comments-child`, obj);
            setNewComment("");
            fetchComments();
        } catch (error) {
            console.error("Error adding comment:", error);
        }
    };


    // Xử lý khi người dùng thay đổi nội dung bình luận mới
    const handleChange = (event) => {
        setNewComment(event.target.value);
    };
    const handleChangeCommentChild = (event) => {
        setNewCommentChild(event.target.value);
    };

    // Hàm để hiển thị form thêm bình luận
    const handleReplyButtonClick = (id) => {
        setIdParent(id);
        setReplyFormVisible(!replyFormVisible); // Đảo ngược trạng thái hiển thị form trả lời
    };

    // JSX
    const renderComments = (comment) => {
        // CSS inline styles
        const commentStyle = {
            marginBottom: '20px',
            padding: '10px',
            border: '1px solid #ccc',
        };

        const childCommentsStyle = {
            marginLeft: '20px',
        };

        const replyStyle = {
            marginTop: '10px',
        };


        return (
            <div key={comment.id} style={commentStyle}>
                <h3>{comment.user.email}:</h3>
                <p>{comment.content}</p>
                {comment.commentChild && (
                    <div style={replyStyle}>
                        {Array.isArray(comment.commentChild) && (
                            <div style={childCommentsStyle}>
                                {comment.commentChild.map((childComment) => (
                                    <div key={childComment.id} style={commentStyle}>
                                        <h4>{childComment.user.email}:</h4>
                                        <p>{childComment.content}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                        {!Array.isArray(comment.commentChild) && (
                            <div style={commentStyle}>
                                {/*<h4>{comment.commentChild.user.email}:</h4>*/}
                                <p>{comment.commentChild.content}</p>
                            </div>
                        )}
                    </div>
                )}
                <button type={"button"} className="reply-btn" onClick={() => handleReplyButtonClick(comment.id)}>Trả
                    lời
                </button>
            </div>
        );
    };

    return (
        <div id="comment" className="tab-pane fade">
            <div className="review border-default universal-padding">
                <div className="group-title">
                    <h2>Thêm bình luận</h2>
                </div>
                <div className="riview-field mt-40">
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="req" htmlFor="comments">Bình luận</label>
                            <textarea
                                className="form-control"
                                rows="5"
                                id="comments"
                                required="required"
                                value={newComment}
                                onChange={handleChange}
                                style={{marginBottom: '10px', width: '100%'}} // Inline CSS for textarea
                            ></textarea>
                        </div>
                        <button type="submit" className="customer-btn">Gửi</button>
                    </form>
                </div>
            </div>

            <div className="review border-default universal-padding mt-30">
                <h2 className="review-title mb-30">Bình luận của khách hàng</h2>
                <div className="riview-field mt-40">
                    <form onSubmit={handleSubmitChild}>
                        {comments.map((comment) => renderComments(comment))}
                        {replyFormVisible && (
                            <div style={{marginTop: '20px'}}>
                            <textarea className="form-control" rows="2" placeholder="Viết phản hồi..."
                                      value={newCommentChild}
                                      onChange={handleChangeCommentChild}
                                      style={{marginBottom: '10px', width: '100%'}}></textarea>
                                <button className="reply-submit-btn customer-btn mt-10">Gửi</button>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Comments;
