var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");
var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "Dave");

console.log(firstPresident.front); 
console.log(firstPresident.back); 
firstPresidentCloze.partial();
firstPresidentCloze.fullText();