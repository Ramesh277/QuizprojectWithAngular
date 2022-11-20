package com.Spacecoding.service;

import java.util.List;
import java.util.Set;


import com.Spacecoding.model.exam.Category;
import com.Spacecoding.model.exam.Quiz;



public interface QuizService {
	
	public Quiz addQuiz(Quiz quiz);
	
	public Quiz updateQuiz(Quiz quiz);
	
	public Set<Quiz> getAllQuizess();
	
	public Quiz getQuiz(Long id);
	
	public void deleteQuiz(Long id);

	public List<Quiz> getAllQuizessOfCategory(Category category);
	
	public List<Quiz> getActiveQuezzes();
	
	public List<Quiz> getActiveQuizzesOfCategory(Category c);

}
