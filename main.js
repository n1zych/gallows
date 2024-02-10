function playGame() {
  let pickWord = function () {
    let words = [
      "apple",
      "banana",
      "chocolate",
      "elephant",
      "guitar",
      "umbrella",
      "sunflower",
      "mountain",
      "ocean",
      "computer",
      "keyboard",
      "television",
      "university",
      "backpack",
      "glasses",
      "soccer",
      "basketball",
      "piano",
      "camera",
      "robot",
    ];

    return words[Math.floor(Math.random() * words.length)];
  };

  let setupAnswerArray = function (word) {
    let answerArray = [];
    for (let i = 0; i < word.length; i++) {
      answerArray[i] = "_ ";
    }
    return answerArray;
  };

  let showPlayerProgress = function (answerArray) {
    alert(answerArray.join(""));
  };

  let getGuess = function () {
    let guess = prompt("Guess a letter");

    if (guess !== null && guess.length === 1 && guess.toUpperCase() === guess) {
      guess = guess.toLowerCase();
    }

    return guess;
  };

  let updateGameState = function (guess, word, answerArray) {
    let correctGuesses = 0;

    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        correctGuesses++;
      }
    }

    return correctGuesses > 0; // Повертаємо true, якщо хоча б одна буква вгадана
  };

  let word = pickWord();
  let answerArray = setupAnswerArray(word);
  let remainingLetters = word.length;
  let over = 0;

  while (remainingLetters > 0 && over < 20) {
    showPlayerProgress(answerArray);
    let guess = getGuess();
    if (guess === null) {
      break;
    } else if (guess.length !== 1) {
      alert("Please enter only one letter.");
    } else {
      let letterGuessed = updateGameState(guess, word, answerArray);
      if (letterGuessed) {
        remainingLetters--;
      }
      if (remainingLetters === 0) {
        break;
      }
      over++;
    }
  }

  if (remainingLetters === 0) {
    alert("Good job! The word was: " + word);
  }
}

document.getElementById("startButton").addEventListener("click", playGame);
