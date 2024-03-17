package com.java.api.controller;

import com.java.api.dto.ProductDto;
import com.java.api.model.Product;
import com.java.api.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;





import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class ProductController {
	
    @Autowired
    private ProductService productService;

    @PostMapping("/product")
    public ResponseEntity<Product> addProduct(@RequestBody ProductDto productDto) {
        Product product = productService.add(productDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(product);
    }

    
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/product/{id}")
    public ResponseEntity<Optional<Product>> getProductById(@PathVariable Long id) {
    	  Optional<Product> product = productService.getProductById(id);
          if (product.isPresent()) {
              return ResponseEntity.ok(product);
          } else {
              return ResponseEntity.notFound().build();
          }
    }

    @GetMapping("/search")
    public ResponseEntity<Page<Product>> search(@RequestParam(defaultValue = "") String keyword, @RequestParam(defaultValue = "1") int page,
                                                @RequestParam(defaultValue = "10") int size) {
        return ResponseEntity.ok(productService.getProductByName(keyword, page, size));
    }
    @GetMapping("/product")
    public ResponseEntity<Page<Product>> getAllProducts(@RequestParam(defaultValue = "all") String category, @RequestParam(defaultValue = "") String search, @RequestParam(defaultValue = "1") int page,
                                                        @RequestParam(defaultValue = "10") int size,
                                                        @RequestParam(defaultValue = "id") String sort) {
        return ResponseEntity.ok(productService.getProducts(page, size, sort, category, search));
    }

}
