package com.example.ai.practice.repository;

import com.example.ai.practice.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
    // Custom queries, if needed
    Product getById(Long id);
}

