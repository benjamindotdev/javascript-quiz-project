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

  filterQuestionsByDifficulty(difficulty) {
    // return difficulty > 0 && difficulty <= 3
    //   ? this.questions.filter((question) => {
    //       return question.difficulty === difficulty;
    //     })
    //   : "Invalid difficulty level";
    return this.questions.filter(
      (question) => question.difficulty == difficulty
    );
  }

  averageDifficulty() {
    return (
      this.questions
        .reduce((acc, question) => acc + question.difficulty, 0)
        .toFixed(1) / this.questions.length
    );
  }
}

const questions = [
  {
    text: "Question 1",
    choices: ["a", "b", "c"],
    answer: "a",
    difficulty: 1,
  },
  {
    text: "Question 2",
    choices: ["d", "e", "f"],
    answer: "d",
    difficulty: 2,
  },
  {
    text: "Question 2",
    choices: ["d", "e", "f"],
    answer: "d",
    difficulty: 2,
  },
  {
    text: "Question 2",
    choices: ["d", "e", "f"],
    answer: "d",
    difficulty: 2,
  },
  {
    text: "Question 3",
    choices: ["g", "h", "i"],
    answer: "g",
    difficulty: 3,
  },
];

// Create a new Quiz instance object
const quiz = new Quiz(questions, 60, 100);

console.log(quiz);
quiz.filterQuestionsByDifficulty(1);
console.log(quiz);

console.log(quiz.filterQuestionsByDifficulty(1));
