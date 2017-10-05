var BasicCard = require("./BasicCard.js");


function ClozeCard(text, cloze){
	this.text = text;
	this.cloze = cloze;
};

ClozeCard.prototype.partial = function() {
	var brokenCloze = "This does not work: " + this.cloze;
	
	if (this.text.includes(this.cloze)) {
		var clozed = this.text.replace(this.cloze, "...");
		console.log(clozed);
	} else {
		console.log(brokenCloze);
	}
};

ClozeCard.prototype.fullText = function() {
		console.log(this.text);
};		

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");
var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "Dave");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 
console.log(firstPresident.back); 
firstPresidentCloze.partial();
firstPresidentCloze.fullText();

// // " ... was the first president of the United States.
// console.log(firstPresidentCloze.partial); 

// // "George Washington was the first president of the United States.
// console.log(firstPresidentCloze.fullText); 

// // Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// var brokenCloze = new ClozeCard("This doesn't work", "oops");

module.exports = ClozeCard;