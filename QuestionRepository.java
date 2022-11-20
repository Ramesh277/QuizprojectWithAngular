package com.Spacecoding.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Spacecoding.model.exam.Question;
import com.Spacecoding.model.exam.Quiz;

public interface QuestionRepository extends JpaRepository<Question, Long>{

	Set<Question> findByQuiz(Quiz quiz);

}
