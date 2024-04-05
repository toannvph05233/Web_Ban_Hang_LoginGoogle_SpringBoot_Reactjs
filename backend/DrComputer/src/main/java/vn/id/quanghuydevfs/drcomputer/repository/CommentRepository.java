package vn.id.quanghuydevfs.drcomputer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.id.quanghuydevfs.drcomputer.model.comment.Comment;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByProductId(Long productId);
    List<Comment> findByComment_Id(Long commentId);
}
