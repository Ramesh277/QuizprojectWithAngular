package com.Spacecoding.controller;



import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Set;

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

import com.Spacecoding.model.exam.Question;
import com.Spacecoding.model.exam.Quiz;
import com.Spacecoding.service.QuestionService;
import com.Spacecoding.service.QuizService;



@RestController
@RequestMapping("/question")
@CrossOrigin("*")
public class QuestionController {
	
	@Autowired
	private QuestionService questionService;
	
	@Autowired
	private QuizService quizService;
	
	@PostMapping("/add")
	public Question addQuestion(@RequestBody Question question)
	{
		
		
		
		return this.questionService.addQuestion(question);
	}
	
	@PutMapping("/update")
	public Question updateQuestion(@RequestBody Question question)
	{
		return this.questionService.updateQuestion(question);
	}
	
	@GetMapping("/allquestion")
	public ResponseEntity<?> getAllQuestions()
	{
	  return ResponseEntity.ok(this.questionService.getAllQuestions());	
	}
	
	@GetMapping("/{id}")
	public Question getQuestion(@PathVariable("id") Long id)
	{
		return this.questionService.getQuestion(id);
	}
	
	@DeleteMapping("/{id}")
	public void deleteQuesion(@PathVariable("id") Long id)
	{
		this.questionService.deleteQuestion(id);
	}
	
	

	@GetMapping("/quiz/{id}")
	public ResponseEntity<?> getQuestionsOfQuiz(@PathVariable("id") Long id)
	{
	Quiz quiz = this.quizService.getQuiz(id);
	
	Set<Question> questions = quiz.getQuestions();
	List list  = new ArrayList(questions);
	if(list.size() > Integer.parseInt(quiz.getNumberOfQuestins()))
	{
		list = list.subList(0, Integer.parseInt(quiz.getNumberOfQuestins() + 1));
	}
	Collections.shuffle(list);
	
	return ResponseEntity.ok(list);
	
	}
    
	//get all quiz 
	@GetMapping("/quiz/all/{id}")
	public ResponseEntity<?> getQuestionsOfQuizAdmin(@PathVariable("id") Long id)
	{
		Quiz quiz = new Quiz();
		quiz.setQid(id);
		Set<Question> questionOfQuiz  = this.questionService.getQuestionsOfQuiz(quiz);
		
		return ResponseEntity.ok(questionOfQuiz);	
	}
	
	//eval quiz
	@PostMapping("/eval_quiz")
	public ResponseEntity<?> evalQuiz(@RequestBody List<Question> questions)
	{
		
		double marksGot=0;
		int correctAnswers = 0;
		int attempted = 0;
		
		for(Question q: questions){

			//single question 
			Question question = this.questionService.get(q.getQesId());
			
			if(question.getAnswer().equals(q.getGivenAnswer()))
			{
				//correct 
				correctAnswers++;
				
				double markSingle = Double.parseDouble(questions.get(0).getQuiz().getMaxMarks())/questions.size();
				marksGot += markSingle;
				
			}
			if(q.getGivenAnswer() == null) {
				attempted++;
			}
			
		}
		
		Map<Object, Object> map = Map.of("marksGot",marksGot,"correctAnswers",correctAnswers, "attempted",attempted);
		
		return ResponseEntity.ok(map);
	}

	
}
