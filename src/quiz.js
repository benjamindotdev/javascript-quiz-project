class Quiz {
  // YOUR CODE HERE:
  //
  // 1. constructor (questions, timeLimit, timeRemaining)
  correctAnswers = 0;
  currentQuestionIndex = 0;
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
  }

  // 2. getQuestion()
  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  // 3. moveToNextQuestion()
  moveToNextQuestion() {
    this.currentQuestionIndex++;
  }

  // 4. shuffleQuestions()
  shuffleQuestions() {
    this.questions.sort(() =>
      Math.floor(Math.random() * this.questions.length)
    );
  }

  // 5. checkAnswer(answer)
  checkAnswer(answer) {
    this.getQuestion().answer === answer ? this.correctAnswers++ : null;
  }

  // 6. hasEnded()
  hasEnded() {
    return this.currentQuestionIndex === this.questions.length;
  }
}
