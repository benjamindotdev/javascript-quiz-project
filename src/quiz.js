class Quiz {
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion() {
    this.currentQuestionIndex++;
  }

  shuffleQuestions() {
    let currentIndex = this.questions.length;
    while (currentIndex !== 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      let temp = this.questions[currentIndex];
      this.questions[currentIndex] = this.questions[randomIndex];
      this.questions[randomIndex] = temp;
    }
    return this.questions;
  }

  checkAnswer(answer) {
    this.getQuestion().answer === answer ? this.correctAnswers++ : null;
  }

  hasEnded() {
    return this.currentQuestionIndex === this.questions.length;
  }
}
