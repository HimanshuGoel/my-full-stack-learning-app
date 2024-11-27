package com.example.demo.repositories;

import com.example.demo.models.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReceipeJpaRepository extends JpaRepository<Recipe, Long> {

}
