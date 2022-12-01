export default class Quiz {
  constructor(buttonsConfig, quizContentConfig, data) {
    this._progressButtons = [...document.querySelectorAll(buttonsConfig.progressButtonsSelector)];
    this._optionButtons = [...document.querySelectorAll(buttonsConfig.optionButtonsSelector)];
    this._currentProgressClass = buttonsConfig.currentProgressClass;

    this._restartButton = document.querySelector(buttonsConfig.restartButtonSelector);

    this._currentQuestionElement = document.querySelector(quizContentConfig.questionNumberSelector);
    this._questionTextElement = document.querySelector(quizContentConfig.questionTextSelector);
    this._optionElements = [...document.querySelectorAll(quizContentConfig.optionsTextSelector)];

    this._quizBlockElement = document.querySelector(quizContentConfig.quizBlockSelector);
    this._resultBlockElement = document.querySelector(quizContentConfig.resultBlockSelector);
    this._resultTextElement = document.querySelector(quizContentConfig.resultTextSelector);

    this._hiddenClass = quizContentConfig.hiddenContentClass;
    this._aquamarineTextStyleClass = quizContentConfig.resultAquamarineTextClass;
    this._yellowTextStyleClass = quizContentConfig.resultYellowTextClass;

    this._data = data;

    this._currentQuestion = 1;
    this._result = 0; // if < 0 mentor, if > 0 reviewer
  }

  startQuiz() {
    this._quizBlockElement.classList.remove(this._hiddenClass);
    this._resultBlockElement.classList.add(this._hiddenClass);
    this._currentQuestion = 1;
    this._result = 0;
    this._renderQuiz();
  }

  _renderQuiz() {
    this._renderCurrentQuizState(this._data[this._currentQuestion - 1]);
  }

  _renderCurrentQuizState(item) {
    this._renderProgressBar();

    this._currentQuestionElement.textContent = this._currentQuestion;

    this._question = item.question;
    this._option1 = item.option1;
    this._option2 = item.option2;

    this._questionTextElement.textContent = this._question;
    this._optionElements[0].textContent = this._option1.text;
    this._optionElements[0].setAttribute('data-key', `${this._option1.result}`);

    this._optionElements[1].textContent = this._option2.text;
    this._optionElements[1].setAttribute('data-key', `${this._option2.result}`);
  }

  _getQuestionNumber(element) {
    return parseInt(element.getAttribute('data-number'));
  }

  _renderQuestion() {
    this._currentQuestionElement.textContent = this._currentQuestion;
  }

  _renderProgressBar() {
    this._progressButtons.forEach(button => button.classList.remove(this._currentProgressClass));
    this._progressButtons
      .slice(0, this._currentQuestion)
      .forEach(button => button
      .classList
      .add(this._currentProgressClass));
  }

  _renderResult() {
    if (this._result < 0) {
      this._resultTextElement.classList.add(this._aquamarineTextStyleClass);
      this._resultTextElement.textContent = 'Наставник';
    } else {
      this._resultTextElement.classList.add(this._yellowTextStyleClass);
      this._resultTextElement.textContent = 'Ревьюер';
    }

    this._quizBlockElement.classList.add(this._hiddenClass);
    this._resultBlockElement.classList.remove(this._hiddenClass);
  }

  _addAnswer(event) {
    this._currentQuestion += 1;

    this._renderQuestion();
    this._renderProgressBar();

    if(event.currentTarget.getAttribute('data-key') === 'mentor') {
      this._result -= 1;
    } else {
      this._result += 1;
    }

    if (this._currentQuestion > this._data.length) {
      this._renderResult();
    } else {
      this._renderQuiz();
    }
  }

  setEventListeners() {
    this._optionButtons.forEach(button => button.addEventListener('click', (event) => this._addAnswer(event)));
    this._restartButton.addEventListener('click', () => this.startQuiz());
  }
}
