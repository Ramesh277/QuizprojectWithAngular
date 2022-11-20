package com.Spacecoding.serviceImpl;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Spacecoding.model.exam.Category;
import com.Spacecoding.repository.CategoryRepository;
import com.Spacecoding.service.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService{
	
	@Autowired
	private CategoryRepository categoryRepository;

	@Override
	public Category addCategory(Category category) {
		
		return this.categoryRepository.save(category);
	}

	@Override
	public Category updateCategory(Category category) {
		
		return this.categoryRepository.save(category);
	}

	@Override
	public Set<Category> getAllCategory() {
 
		return new HashSet<>(this.categoryRepository.findAll());
	}

	@Override
	public Category getCategory(Long id) {
		
		return this.categoryRepository.findById(id).get();
	}

	@Override
	public void deleteCategory(Long id) {
		this.categoryRepository.deleteById(id);
		
	}

}
