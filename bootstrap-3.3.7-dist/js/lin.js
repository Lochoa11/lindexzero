
var currentAudio = new Audio();
var currentElement;

function resetButton(){
	var element = document.querySelector('[aria-label='+currentTitle+']');
	element.setAttribute('class', 'glyphicon glyphicon-play');
}
//resets last players button back to normal

function savePreviousSongInfo(currentTitle){
	arrayOfSongsToTimeStamp[currentTitle] = timeStampTwo - timeStampOne;
	console.log(currentTitle + " is the currently at " + arrayOfSongsToTimeStamp[currentTitle]);
	printDictionary();
}

function printDictionary(){
	for(var key in arrayOfSongsToTimeStamp){
		var val = arrayOfSongsToTimeStamp[key];
		console.log("Song: "+key+" is at "+val);
	}
}



function playSong(songTitle){
	//song object
	var audio = new Audio("music/"+ songTitle +".m4a");
	//HTML element object
	var element = document.querySelector("[aria-label="+ songTitle + "]");
	//get value of class attribute
	currentElement = element;
	var attributeValue = currentElement.getAttribute("class");
	if ((attributeValue === "glyphicon glyphicon-play") || (currentAudio.paused)) {
		currentAudio.pause();
		currentElement.setAttribute("class", "glyphicon glyphicon-pause");
		audio.play();
		currentAudio = audio;
		currentElement = element;
	}else{
		currentAudio.pause();
		currentElement.setAttribute("class", "glyphicon glyphicon-play");
	}

}

