import {useEffect, useState} from "react";
import axios from "axios";
import './comment.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {formatDistanceToNow} from 'date-fns';
import {upImageFirebase} from "../../firebase/Upfirebase";
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';




function Comments({productId}) {
    const [replyFormVisible, setReplyFormVisible] = useState(false);
    const [imageFile, setImageFile] = useState(null);
    const [imageFileChild, setImageFileChild] = useState(null);


    const [comments, setComments] = useState([]);
    const [previewImage, setPreviewImage] = useState(null);
    const [previewImageChild, setPreviewImageChild] = useState(null);
    const [idParent, setIdParent] = useState(0);
    const [idToDelete, setIdToDelete] = useState(0);
    const [newComment, setNewComment] = useState("");
    const [newCommentChild, setNewCommentChild] = useState("");
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);


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
        let obj;
        if (imageFile != null) {
            const uploadResult = await upImageFirebase(imageFile, email);
            obj = {content: newComment, email: email, image: uploadResult.name}
        } else {
            obj = {content: newComment, email: email}
        }
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
        let obj;
        if (imageFileChild != null) {
            const uploadResult = await upImageFirebase(imageFileChild, email);
            obj = {content: newCommentChild, email: email, image: uploadResult.name}
        } else {
            obj = {content: newCommentChild, email: email}
        }
        try {
            // Gửi dữ liệu bình luận mới đến API để lưu trữ
            const response = await axios.post(`http://localhost:8080/api/v1/${idParent}/comments-child`, obj);
            setNewComment("");
            setReplyFormVisible(false);
            setNewCommentChild("");
            fetchComments();
        } catch (error) {
            console.error("Error adding comment:", error);
        }
    };


    // Xử lý khi người dùng thay đổi nội dung bình luận mới
    const handleChange = (event) => {
        setNewComment(event.target.value);
    };


    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImageFile(file);
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreviewImage(imageUrl); // Lưu URL hình ảnh vào state để hiển thị
        }
    };

    const handleImageChangeChild = (event) => {
        const file = event.target.files[0];
        setImageFileChild(file);
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreviewImageChild(imageUrl); // Lưu URL hình ảnh vào state để hiển thị
        }
    };

    const handleDeleteComment = (commentId) => {
        // Hiển thị modal xác nhận
        setShowConfirmationModal(true);
        // Lưu commentId vào state để sử dụng trong việc xóa comment nếu người dùng xác nhận
        setIdToDelete(commentId);
    };

    const handleChangeCommentChild = (event) => {
        setNewCommentChild(event.target.value);
    };

    // Hàm để hiển thị form thêm bình luận
    const handleReplyButtonClick = (id) => {
        setIdParent(id);
        setReplyFormVisible(!replyFormVisible); // Đảo ngược trạng thái hiển thị form trả lời
    };


    const handleConfirmDelete = async () => {
        try {
            // Gọi API để xóa comment
            await axios.get(`http://localhost:8080/api/v1/delete/comments/${idToDelete}`);
            // Sau khi xóa thành công, cập nhật lại danh sách bình luận và đóng modal xác nhận
            fetchComments();
            setShowConfirmationModal(false);
        } catch (error) {
            console.error("Error deleting comment:", error);
        }
    };


    // JSX
    const renderComments = (comment) => {
        // CSS inline styles
        const commentStyle = {
            marginBottom: '20px',
            padding: '10px',
            border: '1px solid #ccc',
        };

        const commentStyle2 = {
            marginBottom: '20px',
            padding: '10px',
        };
        const childCommentsStyle = {
            marginLeft: '20px',
        };

        const replyStyle = {
            marginTop: '10px',
        };

        return (
            <div key={comment.id} style={commentStyle}>
                <div className='row'>
                    <div className='col-1'>
                        <img className="rounded-circle shadow-1-strong me-3"
                             src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" width="55"
                             height="55"/>
                    </div>
                    <div className='col-10'>
                        <h5 style={{marginTop: '20px'}}>{comment.user.fullname}</h5>
                        <p>{formatDistanceToNow(new Date(comment.time), {addSuffix: true})}</p>
                    </div>
                    <div className="col-1">
                        {/* Nút xóa comment chỉ hiển thị khi comment là của người dùng */}
                        {comment.user.email === JSON.parse(sessionStorage.getItem("user")).email && (
                            <button type="button" className="delete-btn"
                                    onClick={() => handleDeleteComment(comment.id)}>
                                <FontAwesomeIcon icon={faTrash}/>
                            </button>
                        )}
                    </div>
                </div>
                <p style={{margin: '10px'}}>{comment.content}</p>
                {comment.image && (
                    <div>
                        <img src={comment.image} alt="Comment Image" width={250} height={200}/>
                        <br/>
                        <br/>
                    </div>
                )}

                {/* Nút trả lời */}
                <button type="button" className="reply-btn" onClick={() => handleReplyButtonClick(comment.id)}>Trả lời
                </button>

                <hr/>
                {comment.commentChild && (
                    <div style={replyStyle}>
                        {Array.isArray(comment.commentChild) && (
                            <div style={childCommentsStyle}>
                                {comment.commentChild.map((childComment) => (
                                    <div key={childComment.id} style={commentStyle2}>

                                        <div className='row'>
                                            <div className='col-1'>
                                                <img className="rounded-circle shadow-1-strong me-3"
                                                     src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                                                     alt="avatar" width="55"
                                                     height="55"/>
                                            </div>
                                            <div className='col-10'>
                                                <h5 style={{marginTop: '20px'}}>{childComment.user.fullname}</h5>
                                                <p>{formatDistanceToNow(new Date(childComment.time), {addSuffix: true})}</p>

                                            </div>
                                            <div className='col-1'>
                                                {/* Nút xóa comment chỉ hiển thị khi comment là của người dùng */}
                                                {childComment.user.email === JSON.parse(sessionStorage.getItem("user")).email && (
                                                    <button type="button" className="delete-btn"
                                                            onClick={() => handleDeleteComment(childComment.id)}>
                                                        <FontAwesomeIcon icon={faTrash}/>
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                        <p style={{margin: '10px'}}>{childComment.content}</p>
                                        {childComment.image && (
                                            <div>
                                                <img src={childComment.image} alt="Comment Image" width={250}
                                                     height={200}/>
                                                <br/>
                                                <br/>
                                            </div>
                                        )}

                                        <hr/>
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
                {replyFormVisible && idParent === comment.id && (
                    <div style={{marginTop: '20px'}}>
        <textarea className="form-control" rows="2" placeholder="Viết phản hồi..."
                  value={newCommentChild}
                  onChange={handleChangeCommentChild}
                  style={{marginBottom: '10px', width: '100%'}}> </textarea>
                        <label htmlFor="imageUploadChild">
                            <FontAwesomeIcon icon={faFileUpload} style={{ cursor: 'pointer', marginLeft: '10px' }} />
                            <span style={{ textDecoration: 'underline', color: "#6699FF"}}> Up image</span>
                            <input
                                type="file"
                                id="imageUploadChild"
                                accept="image/*"
                                onChange={handleImageChangeChild}
                                style={{ display: 'none' }}
                            />
                        </label>
                        <br/>
                        {/* Hiển thị hình ảnh đã chọn */}
                        {previewImageChild && <img src={previewImageChild} alt="Preview" width={300} style={{ marginTop: '10px'}} />}
                        <br/>
                        <button
                            className="reply-submit-btn customer-btn mt-10">Gửi
                        </button>
                    </div>
                )}
            </div>
        );
    }
;

return (
    <div id="comment" className="tab-pane fade">

        <section className="gradient-custom">
            <div className="container my-5 py-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12 col-lg-11 col-xl-9">
                        <div className="card">
                            <div className="review border-default universal-padding">
                                <div className="group-title">
                                    <h2>Thêm bình luận</h2>
                                </div>
                                <div className="riview-field mt-40">
                                    <form autoComplete="off" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label className="req" htmlFor="comments">Bình luận</label>
                                            <div className="textarea-container">
                    <textarea
                        className="form-control"
                        rows="5"
                        id="comments"
                        required="required"
                        value={newComment}
                        onChange={handleChange}
                    > </textarea>
                                                <label htmlFor="imageUpload" className="file-upload-label">
                                                    <FontAwesomeIcon icon={faFileUpload} style={{ cursor: 'pointer', marginLeft: '10px' }} />
                                                    <span style={{ textDecoration: 'underline', color: "#6699FF"}}> Up image</span>
                                                    <input
                                                        type="file"
                                                        id="imageUpload"
                                                        accept="image/*"
                                                        onChange={handleImageChange}
                                                        style={{ display: 'none' }}
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                        {/* Hiển thị hình ảnh đã chọn */}
                                        {previewImage && <img src={previewImage} alt="Preview" width={300} style={{ marginTop: '10px'}} />}
                                        <br/>
                                        <button type="submit" className="customer-btn">Gửi</button>
                                    </form>
                                </div>
                            </div>

                            <div className="card-body p-4">
                                <h4 className="text-center mb-4 pb-2">Bình luận của khách hàng</h4>

                                <div className="row">
                                    <div className="col">

                                        <div className="review border-default universal-padding mt-30">
                                            <div className="riview-field mt-40">
                                                <form onSubmit={handleSubmitChild}>
                                                    {comments.map((comment) => renderComments(comment))}
                                                </form>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {showConfirmationModal && (
                    <div className="confirmation-modal">
                        <div className="modal-content">
                            <p>Bạn chắc chắn muốn xóa comment này?</p>
                            <button onClick={() => setShowConfirmationModal(false)}>Hủy</button>
                            <button onClick={handleConfirmDelete}>Xác nhận</button>
                        </div>
                    </div>
                )}
            </div>
        </section>


    </div>

);
}

export default Comments;
