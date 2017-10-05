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


module.exports = ClozeCard;