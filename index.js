//readline-sync and chalk npm packages imported.
var readlineSync = require("readline-sync");
var chalk = require("chalk");

//Array of Object containing all questions and answers
let quiz = [
  {
    question: chalk.redBright("1. Who is the writer of Harry Potter series?"),
    a: "[a] David Crane",
    b: "[b] J.K Rowling",
    correctAnswer: "b",
  },
  {
    question: chalk.redBright("2. Who played lead character in movie JOKER?"),
    a: "[a] Joaquin Phoenix",
    b: "[b] Robert De Niro",
    correctAnswer: "a",
  },
  {
    question: chalk.redBright(
      "3. 'If you are good at something don't do it free' who said this dialogue ?"
    ),
    a: "[a] Robin",
    b: "[b] Joker",
    correctAnswer: "b",
  },
  {
    question: chalk.redBright(
      "4. In which movie you will find character named Baloo?"
    ),
    a: "[a] Tarzan",
    b: "[b] The Jungle Book",
    correctAnswer: "b",
  },
  {
    question: chalk.redBright(
      "5. Who played the role of 'Alan Turing' in 'The Imitation Game'?"
    ),
    a: "[a] Benedict Cumberbatch",
    b: "[b] Matthew McConaughey",
    correctAnswer: "a",
  },
  {
    question: chalk.redBright(
      "6. Who is paired opposite to Leonardo di Caprio in Titanic?"
    ),
    a: "[a] Kate Winslet",
    b: "[b] Kirsten Dunst",
    correctAnswer: "a",
  },
  {
    question: chalk.redBright(
      "7. Which movie won the Oscars in the year 2018?"
    ),
    a: "[a] Bohemian Rhapsody",
    b: "[b] Roma",
    correctAnswer: "a",
  },
  {
    question: chalk.redBright(
      "8. In which year did the movie 'The Godfather' was released?"
    ),
    a: "[a] 1974",
    b: "[b] 1972",
    correctAnswer: "b",
  },
];

//Scoreboard Array
let scoreboard = [
  {
    name: "Suyash",
    score: 32,
  },
  {
    name: "Meet",
    score: 26,
  },
  {
    name: "Pratik",
    score: 20,
  },
];

//Welcome
console.log("----------------------------");
console.log(chalk.black.bold.bgGreenBright("WELCOME TO MOVIES TRIVIA!!!"));
console.log("----------------------------\n");

//Rules
console.log(
  chalk.white.bold(
    "Rules and Guidelines::\n1. There are total 8 questions.\n2. All questions are compulsory.\n3. Each right answer will give 4 points.\n4. Each wrong answer will deduct 2 points.\n5. To give your answer just enter the desired option.\n"
  )
);

//Intial Game Score
var initialScore = 0;

//Function for getting Username
function getUser() {
  //Getting Name of the player and printing in the console
  var userName = readlineSync.question(
    chalk.red("\n\nBefore starting the quiz, May I know your name?\n")
  );
  console.log(
    "\n\nWelcome",
    chalk.bold.cyan(userName),
    "\nYour quiz has started. All the best!!!\n\n"
  );
}

//Function to get confirmation before playing
function confirmPlaying() {
  //Checking condition if user want to play game or not.
  if (readlineSync.keyInYN(chalk.red("Would you like to play the quiz?\n"))) {
    //If Yes! then call the function where we get the username.
    getUser();
    //Function call where all logic is built.
    quizFunction();
  } else {
    //if user enter 'n' then print thankyou message!
    console.log(
      chalk.bold.white.bgRedBright("\n\nThankYou!", "Have a great day! Bye...")
    );
  }
}

//Function Call (Where we get username and confirmation)
confirmPlaying();

//Main Function to get questions and answer
function quizFunction() {
  //Iterating over an array to get single question and options
  for (var i = 0; i < quiz.length; i++) {
    //Getting first question and storing it in variable
    var questions = quiz[i].question;

    //Getting two options and storing it in two different variables
    var optionOne = quiz[i].a;
    var optionTwo = quiz[i].b;

    //Printing question
    console.log(chalk.bold.redBright(questions), "\n");

    //Printing options
    console.log(optionOne);
    console.log(optionTwo);

    //Asking user's input as an answer
    var answer = readlineSync.question("\nYour Answer? ");

    //Checking condition is user's answer matches our answer
    if (answer.toLowerCase() === quiz[i].correctAnswer) {
      //Incrementing the score on every correct answer.
      initialScore = initialScore + 4;

      //Printing message and current score after winning the point
      console.log(
        chalk.green("\nWOOAAHHH, Right Answer (+4) \nScore :", initialScore)
      );
      console.log("------------------------------------------------------ \n");
    } else {
      //Decrementing the score on every wrong answer.
      initialScore = initialScore - 2;

      //Printing message and current score after losing  the point
      console.log(
        chalk.red("OOOOOPS, Wrong Answer (-2) \nScore :", initialScore)
      );
      console.log("------------------------------------------------------ \n");
    }
  }

  //Printing message after the quiz is completed
  console.log(
    chalk.bgBlueBright.bold.black(
      "\nThe quiz has ended, ThankYou for playing.\n\n"
    )
  );

  //Calling Leaderboard Function if user beats high score!
  getLeaderBoardScore();
}

//Function for comparing currentScore and High Score
function getLeaderBoardScore() {
  //Comparing if the current score of user matches leaderboard high score
  if (initialScore === scoreboard[0].score) {
    //if Yes then printing message
    console.log(
      chalk.cyan.bold(
        "Congratulations! You Scored::",
        initialScore,
        "points\nYou are now on top of our leaderboard table"
      )
    );
    console.log(chalk.cyan.bold("Hope to see you soon. Have a great day!"));
  } else {
    //If not then print goodbye message
    console.log(
      chalk.cyan.bold(
        "Congratulations! You Scored::",
        initialScore,
        "points\nBut you couldn't make it to the top of our leaderboard table"
      )
    );
    console.log(chalk.cyan.bold("Better Luck Next Time! Have a great day!"));
  }
}
