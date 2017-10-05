var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var inquirer = require("inquirer");
var questionArray = [];

// var firstPresident = new BasicCard(
//     "Who was the first president of the United States?", "George Washington");
// var firstPresidentCloze = new ClozeCard(
//     "George Washington was the first president of the United States.", "Dave");

// console.log(firstPresident.front); 
// console.log(firstPresident.back); 
// firstPresidentCloze.partial();
// firstPresidentCloze.fullText();

function newCard() {
	inquirer
	  .prompt([
	    {
	      type: "list",
	      message: "Please choose to create a 'Basic' or 'Cloze Deleted' to create a new card:",
	      choices: ["Basic", "Cloze Deleted"],
	      name: "card"
	    }

	    ])
		.then(function(rep) {
		    
		    console.log("ok,", rep.card);
		    if (rep.card === "Basic") {
		    	enterBasic();
		    } else {
		    	enterCloze();
		    }
		});

}


function enterBasic() {
	inquirer
  .prompt([
    {
      type: "input",
      message: "Enter the text for Card Front:",
      name: "front"
    }, 

    {
      type: "input",
      message: "Enter the text for Card Back:",
      name: "back"
    }

    ])
	.then(function(rep) {
	    var newQuestion = new BasicCard(rep.front, rep.back);
	    questionArray.push(rep);
	   	console.log("card front:", newQuestion.front);
	   	console.log("card back:", newQuestion.back);
	   	promptNew();
	});
}

function enterCloze() {
	inquirer
  .prompt([

    {
      type: "input",
      message: "Enter the text for Card Front in Cloze format:",
      name: "front"
    }, 

    {
      type: "input",
      message: "Enter the text for Card Back:",
      name: "back"
    }

    ])
	.then(function(rep) {
		
		if (rep.front.includes(rep.back)) {
	    var newQuestion = new ClozeCard(rep.front, rep.back);
	    console.log(rep);

	    var partial = newQuestion.partial();
	    rep.front = partial;
	    questionArray.push(rep);
	    console.log(questionArray);
	    console.log("card front:", partial);
	   	console.log("card back:", newQuestion.cloze);
	    promptNew();
		
		} else {
			console.log(">>>>>Incorrect format for Cloze card!!!");
			enterCloze();

		}
	});
}

function promptNew() {
	inquirer
	  .prompt([
	    // Here we create a basic text prompt.
	    {
	      type: "list",
	      message: "Would you like to create a new card or see question list?",
	      choices: ["New Card", //"Play Trivia!", 
	      "See question list"],
	      name: "boolean"
	    }

	    ])
		.then(function(rep) {

			if (rep.boolean === "New Card") {
				newCard();
			//}

			// else if (rep.boolean === "Play Trivia") {
			// 	console.log("good luck!");
			// 	playTrivia();
			} else {
				seeQuestionList();
			}

		});
}

function seeQuestionList() {
	for (var i = 0; i < questionArray.length; i++) {
		console.log("Question", i + 1, ":", "front:", questionArray[i].front, ", back:", questionArray[i].back);
	}

}

newCard();