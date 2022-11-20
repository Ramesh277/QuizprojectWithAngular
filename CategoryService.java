package com.Spacecoding.service;

import java.util.Set;

import com.Spacecoding.model.exam.Category;

public interface CategoryService {
	
	public Category addCategory(Category category);
	
	public Category updateCategory(Category category);
	
	public Set<Category> getAllCategory();
	
	public Category getCategory(Long id);
	
	public void deleteCategory(Long id);

}
