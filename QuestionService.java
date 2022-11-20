package com.Spacecoding.service;

import java.util.Set;

import com.Spacecoding.model.exam.Question;
import com.Spacecoding.model.exam.Quiz;

public interface QuestionService {
	
	public Question addQuestion(Question question);
	
	public Question updateQuestion(Question question);
	
	public Set<Question> getAllQuestions();
	
	public Question getQuestion(Long id);
	
	public void deleteQuestion(Long id);
	
	public Set<Question> getQuestionsOfQuiz(Quiz quiz);
	
	public Question get(long questionId);

}
