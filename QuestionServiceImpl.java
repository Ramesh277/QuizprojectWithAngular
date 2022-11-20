package com.Spacecoding.serviceImpl;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Spacecoding.model.exam.Question;
import com.Spacecoding.model.exam.Quiz;
import com.Spacecoding.repository.QuestionRepository;
import com.Spacecoding.service.QuestionService;
import com.Spacecoding.service.QuizService;

@Service
public class QuestionServiceImpl implements QuestionService{
	
	@Autowired
	private QuestionRepository questionRepository;
	
	@Autowired
	private QuizService quizService;

	@Override
	public Question addQuestion(Question question) {
		
	


		return this.questionRepository.save(question);
	}

	@Override
	public Question updateQuestion(Question question) {
		
		return this.questionRepository.save(question);
	}

	@Override
	public Set<Question> getAllQuestions() {
		
		return new HashSet<>(this.questionRepository.findAll());
	}

	@Override
	public Question getQuestion(Long id) {
		
		return this.questionRepository.findById(id).get();
	}

	@Override
	public void deleteQuestion(Long id) {
		this.questionRepository.deleteById(id);
		
	}

	@Override
	public Set<Question> getQuestionsOfQuiz(Quiz quiz) {
				
		return this.questionRepository.findByQuiz(quiz);
	}

	@Override
	public Question get(long questionId) {
		
		return this.questionRepository.getOne(questionId);
	}

}
