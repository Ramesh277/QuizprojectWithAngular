package com.Spacecoding.controller;

import java.util.List;

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
import com.Spacecoding.model.exam.Quiz;
import com.Spacecoding.service.QuizService;

@RestController
@RequestMapping("/quiz")
@CrossOrigin("*")
public class QuizController {
	
	@Autowired
	private QuizService quizService;
	
	@PostMapping("/ad")
	public Quiz addQuiz(@RequestBody Quiz quiz) 
	{
		return this.quizService.addQuiz(quiz);
	}
	
	@PutMapping("/update")
	public Quiz updateQuiz(@RequestBody Quiz quiz)
	{
		return this.quizService.updateQuiz(quiz);
	}
	
	@GetMapping("/all")
	public ResponseEntity<?> getAllQuizzes()
	{
		return ResponseEntity.ok(this.quizService.getAllQuizess());
				
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Quiz> getQuiz(@PathVariable("id") Long id)
	{
		return ResponseEntity.ok(this.quizService.getQuiz(id));
	}
	
	@DeleteMapping("/{id}")
	public void deleteQuiz(@PathVariable("id") Long id)
	{
		this.quizService.deleteQuiz(id);
	}
	
	@GetMapping("/catquiz/{id}")
	public List<Quiz> getQuizOfCategory(@PathVariable("id") Long id){
		Category category = new Category();
		category.setCid(id);
		return this.quizService.getAllQuizessOfCategory(category);
	}
	
	//get active Quizzes	
	@GetMapping("/active")
	public List<Quiz> getActiveQuizzes(){
		return this.quizService.getActiveQuezzes();
	}
	
	@GetMapping("/category/active/{cid}")
	public List<Quiz> getActiveCategory(@PathVariable("cid") Long cid)
	{
		Category category = new Category();
		category.setCid(cid);
		
	 return this.quizService.getActiveQuizzesOfCategory(category);	
	}

}
