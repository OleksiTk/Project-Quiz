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
        text: "1905",
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
function creatQuestion() {
  let text = (textQuestion.innerHTML = question[0].textQuestion);

  buttonsAnswer.forEach((button, index) => {
    button.textContent = question[0].answer[index].text;
  });
}

buttonNext.addEventListener("click", creatQuestion);
