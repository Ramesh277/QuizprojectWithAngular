package com.Spacecoding.serviceImpl;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.Spacecoding.model.exam.Category;
import com.Spacecoding.model.exam.Quiz;
import com.Spacecoding.repository.QuizRepository;
import com.Spacecoding.service.QuizService;

@Service
public class QuizServiceImpl implements QuizService{
	
	@Autowired
	private QuizRepository quizRepository;

	@Override
	public Quiz addQuiz(Quiz quiz) {
		
		return this.quizRepository.save(quiz);
	}

	@Override
	public Quiz updateQuiz(Quiz quiz) {
		
		return this.quizRepository.save(quiz);
	}

	@Override
	public Set<Quiz> getAllQuizess() {

		return new HashSet<>(this.quizRepository.findAll());
	}

	@Override
	public Quiz getQuiz(Long id) {
		
		return this.quizRepository.findById(id).get();
	}

	@Override
	public void deleteQuiz(Long id) {
		this.quizRepository.deleteById(id);
	}

	@Override
	public List<Quiz> getAllQuizessOfCategory(Category category) {
	
		return this.quizRepository.findByCategory(category);
	}

	//get active quizzes
	@Override
	public List<Quiz> getActiveQuezzes() {
		
		return this.quizRepository.findByActive(true);
	}

	@Override
	public List<Quiz> getActiveQuizzesOfCategory(Category c) {
	
		return this.quizRepository.findByCategoryAndActive(c, true);
	}

	
	
	



}
