package com.java.api.repository;

import com.java.api.model.Category;
import com.java.api.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;





public interface ProductRepository extends JpaRepository<Product, Long> {
	Page<Product> getProductsByTitleContainsIgnoreCase(String name, Pageable pageable);

    Page<Product> findByCategoryAndTitleContainingIgnoreCase(Category category, String keyword, Pageable pageable);

    Page<Product> findByCategory(Category category, Pageable pageable);
}
