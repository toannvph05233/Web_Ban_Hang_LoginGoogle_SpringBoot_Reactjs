package vn.id.quanghuydevfs.drcomputer.model.comment;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import vn.id.quanghuydevfs.drcomputer.model.user.User;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommentResponse {
    private Long id;
    private String content;
    private User user;
    private List<Comment> commentChild;
}
