package com.java.api.service;

import com.java.api.dto.ProductDto;
import com.java.api.model.Category;
import com.java.api.model.Product;
import com.java.api.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;





import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;
    public Page<Product> getProducts(int page, int size, String sort, String category, String search) {
        Sort sorting;
        if (sort.equals("id")) {
            sorting = Sort.by(Sort.Order.asc("id"));
        } else {
            sorting = Sort.by(sort.equals("asc") ? Sort.Order.asc("price") : Sort.Order.desc("price"));
        }

        Pageable pageable;
        if ("all".equalsIgnoreCase(category)) {
            pageable = PageRequest.of(page - 1, size, sorting);
        } else {
            Category categoryEnum = Category.valueOf(category);
            pageable = PageRequest.of(page - 1, size, sorting);
            if (search != null && !search.isEmpty()) {
                return productRepository.findByCategoryAndTitleContainingIgnoreCase(categoryEnum, search, pageable);
            } else {
                return productRepository.findByCategory(categoryEnum, pageable);
            }
        }

        if (search != null && !search.isEmpty()) {
            return productRepository.getProductsByTitleContainsIgnoreCase(search, pageable);
        } else {
            return productRepository.findAll(pageable);
        }
    }

    public Optional<Product> getProductById(Long id) {
        return productRepository.findById(id);
    }

    public Page<Product> getProductByName(String name, int page, int size) {
        Pageable pageable = PageRequest.of(page - 1, size);
        return productRepository.getProductsByTitleContainsIgnoreCase(name, pageable);
    }
    public Product add(ProductDto productDto) {
        // Tạo một đối tượng Product từ ProductDto
        Product product = new Product();
        product.setTitle(productDto.getTitle());
        product.setDescription(productDto.getDescription());
        String categoryAsString = productDto.getCategory().toString();
        product.setCategory(Category.valueOf(categoryAsString));
        product.setPrice(productDto.getPrice());
        product.setStorage(productDto.getStorage());
        product.setImg1(productDto.getImg1());
        product.setImg2(productDto.getImg2());

        // Lưu đối tượng Product vào cơ sở dữ liệu
        return productRepository.save(product);
    }

    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    public Product update(Long id, ProductDto p) {
    	
        Product product = productRepository.findById(id).orElseThrow();
        product.setId(id);
        product.setTitle(p.getTitle());
        product.setDescription(p.getDescription());
        String categoryAsString = p.getCategory().toString();
        product.setCategory(Category.valueOf(categoryAsString));
        product.setPrice(p.getPrice());
        product.setStorage(p.getStorage());
        product.setImg1(p.getImg1());
        product.setImg2(p.getImg2());
        productRepository.save(product);
        return product;
    }

    public boolean delete(Long id) {
        Optional<Product> p = productRepository.findById(id);
        if (p.isPresent()) {
            productRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
    
}

