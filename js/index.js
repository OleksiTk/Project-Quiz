const question = [
  {
    textQuestion: "1. What is the capital of France?",
    answer: [
      {
        text: "London",
        result: "false",
      },
      {
        text: "Berlin",
        result: "false",
      },
      {
        text: "Paris",
        result: "true",
      },
      {
        text: "Madrid",
        result: "false",
      },
    ],
  },
  {
    textQuestion: '2. Which planet is known as the "Red Planet"?',
    answer: [
      {
        text: "Venus",
        result: "false",
      },
      {
        text: "Mars",
        result: "true",
      },
      {
        text: "Jupiter",
        result: "false",
      },
      {
        text: "Saturn",
        result: "false",
      },
    ],
  },
  {
    textQuestion: '3. Who wrote the play "Romeo and Juliet"?',
    answer: [
      {
        text: "Charles Dickens",
        result: "false",
      },
      {
        text: "William Shakespeare",
        result: "true",
      },
      {
        text: "Mark Twain",
        result: "false",
      },
      {
        text: "Jane Austen",
        result: "false",
      },
    ],
  },
  {
    textQuestion: "4. What is the largest mammal in the world?",
    answer: [
      {
        text: "African Elephant",
        result: "false",
      },
      {
        text: "Blue Whale",
        result: "true",
      },
      {
        text: "Giraffe",
        result: "false",
      },
      {
        text: "Polar Bear",
        result: "false",
      },
    ],
  },
  {
    textQuestion: "5. In which year did the Titanic sink?",
    answer: [
      {
        text: "1912",
        result: "true",
      },
      {
        text: "1905",
        result: "false",
      },
      {
        text: "1906",
        result: "false",
      },
      {
        text: "1898",
        result: "false",
      },
    ],
  },
];

let textQuestion = document.querySelector(".quiz__question");
let buttonsAnswer = document.querySelectorAll(".quiz__btn");
let buttonNext = document.querySelector(".quiz__next-button");
let quizAnswer = document.querySelector(".quiz__answer");
let currentQuestion = 0;
let startButton = document.querySelector(".quiz__start-button");
let score = 0;
let container = document.querySelector(".quiz__container");
let quizResult = document.querySelector(".quiz__result");
let quizScore = document.querySelector(".quiz__result--score");
let quizTryAgain = document.querySelector(".quiz__result--f5");

startButton.addEventListener("click", () => {
  loadAnimation(),
    hiddeContainer(),
    setTimeout(showQuestion, 2000),
    setTimeout(creatQuestion, 2000);
});

function hiddeContainer() {
  container.style.display = "none";
  setTimeout(() => {
    container.style.display = "block";
  }, 2000);
}

function buttonShow() {
  buttonNext.style.display = "block";
}
function hiddeButton() {
  if (buttonNext.style.display == "block") {
    buttonNext.style.display = "none";
  }
}

function showQuestion() {
  buttonNext.style.display = "none";
  let quizStart = document.querySelector(".quiz__start");
  container.style.height = "600px";
  quizStart.style.display = "none";
  quizAnswer.style.display = "flex";
}

quizTryAgain.addEventListener("click", () => {
  location.reload(); // Перезавантажує сторінку
});

function resultYour() {
  container.style.display = "none";
  quizAnswer.style.display = "none";
  loadAnimation();
  setTimeout(() => {
    if (currentQuestion == 5) {
      container.style.display = "block";
      quizScore.textContent = score + "/5";
      quizResult.style.display = "flex";
      container.style.height = "360px";
    }
  }, 2000);
}

function creatQuestion() {
  let text = (textQuestion.innerHTML = question[currentQuestion].textQuestion);

  buttonsAnswer.forEach((button, index) => {
    button.textContent = question[currentQuestion].answer[index].text;
  });
  clear();
  buttonsAnswer.forEach((button) => {
    button.disabled = false; // Вимикаємо всі кнопки
  });

  console.log(score);
}

buttonNext.addEventListener("click", () => {
  currentQuestion++;
  if (!(currentQuestion == 5)) {
    creatQuestion();
    hiddeButton(); // Ховаємо кнопку "Next"
  } else {
    resultYour();
  }
});

buttonsAnswer.forEach((button, index) => {
  button.addEventListener("click", () => {
    resultAnswer(button);
    buttonShow();
  });
});

function resultAnswer(btn) {
  let textButton = btn.textContent; // Текст на кнопці
  const currentAnswer = question[currentQuestion].answer.find(
    (answer) => answer.text === textButton
  ); // Знайдемо поточну відповідь

  // Додаємо клас залежно від того, правильна чи неправильна відповідь
  if (currentAnswer.result === "true") {
    btn.classList.add("quiz__btn__true");
    score++;
  } else {
    btn.classList.add("quiz__btn__false"); // Для неправильної відповіді
  }

  // Після того як натиснули на відповідь, потрібно показати правильну відповідь
  question[currentQuestion].answer.forEach((answer, index) => {
    // Знайдемо кнопку, яка містить правильну відповідь
    if (answer.result === "true") {
      buttonsAnswer[index].classList.add("quiz__btn__true"); // Додамо клас для правильної кнопки
    }
  });

  // Забороняємо подальші натискання на кнопки після вибору
  buttonsAnswer.forEach((button) => {
    button.disabled = true; // Вимикаємо всі кнопки
  });
  buttonShow();
}

function clear() {
  buttonsAnswer.forEach((button) => {
    button.classList.remove("quiz__btn__true", "quiz__btn__false");
  });
}

function loadAnimation() {
  document.getElementById("loadingAnimation").classList.remove("hidden");

  // Затримка для імітації завантаження (наприклад, 2 секунди)
  setTimeout(function () {
    // Приховуємо анімацію
    document.getElementById("loadingAnimation").classList.add("hidden");

    // Показуємо питання
    quizAnswer.classList.remove("hidden");
  }, 2000); // 2000 мс = 2 секунди
}
