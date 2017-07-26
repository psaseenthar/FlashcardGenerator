module.exports = function ClozeCard(text, cloze) {
	this.fullText = text;
	this.cloze = cloze;
	this.partial = text;
	partial.replace(cloze, "...");

	if (fullText.indexOf(cloze) === -1) {
		console.log("The full text does not contain the specified cloze.")
	}
}