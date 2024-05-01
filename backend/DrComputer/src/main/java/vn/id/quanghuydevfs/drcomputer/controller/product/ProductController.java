package vn.id.quanghuydevfs.drcomputer.controller.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import vn.id.quanghuydevfs.drcomputer.model.comment.Comment;
import vn.id.quanghuydevfs.drcomputer.model.comment.CommentRequest;
import vn.id.quanghuydevfs.drcomputer.model.comment.CommentResponse;
import vn.id.quanghuydevfs.drcomputer.model.order.Order;
import vn.id.quanghuydevfs.drcomputer.model.product.Product;
import vn.id.quanghuydevfs.drcomputer.model.user.User;
import vn.id.quanghuydevfs.drcomputer.repository.CommentRepository;
import vn.id.quanghuydevfs.drcomputer.repository.OrderRepository;
import vn.id.quanghuydevfs.drcomputer.repository.UserRepository;
import vn.id.quanghuydevfs.drcomputer.service.ProductService;
import vn.id.quanghuydevfs.drcomputer.service.UserService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/v1")

public class ProductController {
    @Autowired
    private ProductService productService;

    @Autowired
    private CommentRepository commentRepository;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OrderRepository orderRepository;

    @GetMapping("/products")
    public ResponseEntity<Page<Product>> getAllProducts(@RequestParam(defaultValue = "all") String category, @RequestParam(defaultValue = "") String search, @RequestParam(defaultValue = "1") int page,
                                                        @RequestParam(defaultValue = "10") int size,
                                                        @RequestParam(defaultValue = "id") String sort) {
        return ResponseEntity.ok(productService.getProducts(page, size, sort, category, search));
    }

    @GetMapping("/search")
    public ResponseEntity<Page<Product>> search(@RequestParam(defaultValue = "") String keyword, @RequestParam(defaultValue = "1") int page,
                                                @RequestParam(defaultValue = "10") int size) {
        return ResponseEntity.ok(productService.getProductByName(keyword, page, size));
    }

    @GetMapping("/product/{id}")
    public ResponseEntity<Optional<Product>> getProductById(@PathVariable Long id) {
        return ResponseEntity.ok(productService.getProductById(id));
    }


    @GetMapping("/my_order/{email}")
    public ResponseEntity<?> myOrder(@PathVariable String email) {
        List<Order> orders = orderRepository.findAllByUserEmail(email);
        return ResponseEntity.ok(orders);
    }


//    @Secured("ADMIN")
//    @PostMapping("/management/product/add")
//    public ResponseEntity<Product> addProduct(@RequestBody ProductDto productDto) {
//        return ResponseEntity.ok(productService.add(productDto));
//    }
//
//    @Secured("/ADMIN")
//
//    @PutMapping("/management/product/update/{id}")
//    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody ProductDto productDto) {
//        return ResponseEntity.ok(productService.update(id, productDto));
//    }
//
//    @Secured("ADMIN")
//
//    @DeleteMapping("/management/product/delete/{id}")
//    public ResponseEntity<Boolean> deleteProduct(@PathVariable Long id) {
//        return ResponseEntity.ok(productService.delete(id));
//    }
}

