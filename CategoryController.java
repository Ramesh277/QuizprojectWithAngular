package com.Spacecoding.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Spacecoding.model.exam.Category;
import com.Spacecoding.service.CategoryService;

@RestController
@RequestMapping("/category")
@CrossOrigin("*")
public class CategoryController {
	
	@Autowired
	private CategoryService categoryService;
	
	@PostMapping("add")
	public Category addCategory(@RequestBody Category category)
	{
		return this.categoryService.addCategory(category);
	}
	
	@PutMapping("/update")
	public Category updateCategory(@RequestBody Category category)
	{
		return this.categoryService.updateCategory(category);
	}
	
	@GetMapping("/all")
	public ResponseEntity<?> getAllCategory()
	{
	
		return ResponseEntity.ok(this.categoryService.getAllCategory());
		
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getCategory(@PathVariable("id") Long id)
	{
		return ResponseEntity.ok(this.categoryService.getCategory(id));
	}
	
	@DeleteMapping("/{id}")
	public void deleteCategory(@PathVariable("id") Long id)
	{
		this.categoryService.deleteCategory(id);
	}

}
