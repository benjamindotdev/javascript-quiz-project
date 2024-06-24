class Quiz {
  correctAnswers = 0;
  currentQuestionIndex = 0;
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
  }

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion() {
    this.currentQuestionIndex++;
  }

  shuffleQuestions() {
    this.questions.sort(() =>
      Math.floor(Math.random() * this.questions.length)
    );
  }

  checkAnswer(answer) {
    this.getQuestion().answer === answer ? this.correctAnswers++ : null;
  }

  hasEnded() {
    return this.currentQuestionIndex === this.questions.length;
  }
}
