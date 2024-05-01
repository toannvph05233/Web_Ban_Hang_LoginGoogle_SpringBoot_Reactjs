import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {upImageFirebase} from "../../../firebase/Upfirebase";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileUpload} from "@fortawesome/free-solid-svg-icons";

function AdminComment() {
    const [comments, setComments] = useState([]);
    const [selectedCommentId, setSelectedCommentId] = useState(null); // State to track the selected comment for reply modal
    const [newCommentChild, setNewCommentChild] = useState("");
    const [imageFileChild, setImageFileChild] = useState(null);
    const [previewImageChild, setPreviewImageChild] = useState(null);
    const [selectedComments, setSelectedComments] = useState([]);

    useEffect(() => {
        getAllComments();
    }, []);

    async function getAllComments() {
        try {
            const response = await axios.get(
                'http://localhost:8080/api/v1/admin/comments'
            );
            setComments(response.data);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    }

    const [expandedComments, setExpandedComments] = useState({});

    const toggleCommentExpansion = (commentId) => {
        setExpandedComments((prevExpandedComments) => ({
            ...prevExpandedComments,
            [commentId]: !prevExpandedComments[commentId],
        }));
    };

    const replyToComment = (commentId) => {
        setSelectedCommentId(commentId);
        console.log('Replying to comment:', commentId);
        // Open the modal using vanilla JavaScript
        const modal = document.getElementById("modalComment");
        if (modal) {
            modal.style.display = "block";
        }
    };

    const selectComment = (commentId) => {
        if (selectedComments.includes(commentId)) {
            setSelectedComments(selectedComments.filter(id => id !== commentId));
        } else {
            setSelectedComments([...selectedComments, commentId]);
        }
    };

    const handleChangeCommentChild = (event) => {
        setNewCommentChild(event.target.value);
    };

    const handleImageChangeChild = (event) => {
        const file = event.target.files[0];
        setImageFileChild(file);
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreviewImageChild(imageUrl);
        }
    };


    const deleteSelectedComments = async () => {
        let confirm = window.confirm("Bạn chắc chắn muốn khóa các comment đã chọn chứ");
        try {
            if (confirm) {
                await Promise.all(selectedComments.map(async (commentId) => {
                    await axios.get(`http://localhost:8080/api/v1/delete/comments/${commentId}`);
                }));
                getAllComments();
                setSelectedComments([]);
            }
        } catch (error) {
            console.error("Error deleting comments:", error);
        }
    };
    const deleteCommentChild = async (commentId) => {
        let confirm = window.confirm("Bạn chắc chắn muốn khóa các comment đã chọn chứ");
        try {
            if (confirm) {
                await axios.get(`http://localhost:8080/api/v1/delete/comments/${commentId}`);
                getAllComments();
            }
        } catch (error) {
            console.error("Error deleting comments:", error);
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
            const response = await axios.post(`http://localhost:8080/api/v1/${selectedCommentId}/comments-child`, obj);
            setNewCommentChild("");
            // Close the modal using vanilla JavaScript
            const modal = document.getElementById("modalComment");
            if (modal) {
                modal.style.display = "none";
            }
            setPreviewImageChild(null);
            getAllComments();
        } catch (error) {
            console.error("Error adding comment:", error);
        }
    };

    return (
        <div>
            <div className="container">
                <br/>
                <br/>
                <h2>Manager Comment</h2>
                <br/>
                <button className="btn btn-danger" onClick={deleteSelectedComments}>Delete Selected Comments</button>
                <br/>
                <br/>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Content</th>
                        <th>Image</th>
                        <th>Time</th>
                        <th>User</th>
                        <th>Product</th>
                        <th>Actions</th>
                        <th>Comment Child</th>
                    </tr>
                    </thead>
                    <tbody>
                    {comments.map((comment) => (
                        <React.Fragment key={comment.id}>
                            <tr>
                                <td>
                                    <input
                                        type="checkbox"
                                        onChange={() => selectComment(comment.id)}
                                        checked={selectedComments.includes(comment.id)}
                                    />
                                </td>
                                <td>{comment.content}</td>
                                <td>
                                    {comment.image && (
                                        <img
                                            src={comment.image}
                                            alt="Comment Image"
                                            style={{maxWidth: '100px'}}
                                        />
                                    )}
                                </td>
                                <td>{comment.time}</td>
                                <td>{comment.user.fullname}</td>
                                <td>
                                    <Link to={'/products/' + comment.product?.id}>
                                        {comment.product?.title}
                                    </Link>
                                </td>
                                <td>
                                    <button
                                        onClick={() => replyToComment(comment.id)}
                                        className="btn btn-primary mr-2"
                                    >
                                        Reply
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => toggleCommentExpansion(comment.id)}
                                    >
                                        {expandedComments[comment.id] ? 'Hide' : 'View'}
                                    </button>
                                </td>
                            </tr>
                            {expandedComments[comment.id] && (
                                <tr>
                                    <td colSpan="8">
                                        <table className="table">
                                            <thead>
                                            <tr>
                                                <th>Content</th>
                                                <th>Image</th>
                                                <th>Time</th>
                                                <th>User</th>
                                                <th>Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {comment.commentChild.map((childComment) => (
                                                <tr key={childComment.id}>
                                                    <td>{childComment.content}</td>
                                                    <td>
                                                        {childComment.image && (
                                                            <img
                                                                src={childComment.image}
                                                                alt="Child Comment Image"
                                                                style={{maxWidth: '100px'}}
                                                            />
                                                        )}
                                                    </td>
                                                    <td>{childComment.time}</td>
                                                    <td>{childComment.user.fullname}</td>
                                                    <td>
                                                        <button
                                                            onClick={() => deleteCommentChild(childComment.id)}
                                                            className="btn btn-danger"
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="container">
                <div className="modal" id="modalComment">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Modal Comment</h4>
                                <button type="button" className="close" onClick={() => {
                                    const modal = document.getElementById("modalComment");
                                    if (modal) {
                                        modal.style.display = "none";
                                    }
                                }}>&times;</button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmitChild}>
                                    <div style={{marginTop: '20px'}}>
                                        <textarea className="form-control" rows="2" placeholder="Viết phản hồi..."
                                                  value={newCommentChild}
                                                  onChange={handleChangeCommentChild}
                                                  style={{marginBottom: '10px', width: '100%'}}> </textarea>
                                        <label htmlFor="imageUploadChild">
                                            <FontAwesomeIcon icon={faFileUpload}
                                                             style={{cursor: 'pointer', marginLeft: '10px'}}/>
                                            <span
                                                style={{textDecoration: 'underline', color: "#6699FF"}}> Up image</span>
                                            <input
                                                type="file"
                                                id="imageUploadChild"
                                                accept="image/*"
                                                onChange={handleImageChangeChild}
                                                style={{display: 'none'}}
                                            />
                                        </label>
                                        <br/>
                                        {previewImageChild && <img src={previewImageChild} alt="Preview" width={300}
                                                                   style={{marginTop: '10px'}}/>}
                                        <br/>
                                        <button className="reply-submit-btn customer-btn mt-10">Gửi</button>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" onClick={() => {
                                    const modal = document.getElementById("modalComment");
                                    setPreviewImageChild(null);
                                    if (modal) {
                                        modal.style.display = "none";
                                    }
                                }}>Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminComment;
