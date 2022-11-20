package com.Spacecoding.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Spacecoding.model.exam.Category;
import com.Spacecoding.model.exam.Quiz;

public interface QuizRepository extends JpaRepository<Quiz, Long>{
	
	public List<Quiz> findByCategory(Category category);
	
	public List<Quiz> findByActive(Boolean b);

	public List<Quiz> findByCategoryAndActive(Category c, Boolean b);
}
