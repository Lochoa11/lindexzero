
var currentAudio = new Audio();

var audioPlayer = document.getElementById('musicPlayer');


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
	var audioSource = "assets/music/" + songTitle + ".m4a";
	var currentSong = document.getElementsByClassName('placementText')[0];

	//HTML element object
	var element = document.querySelector("[aria-label="+ songTitle + "]");
	//get value of class attribute

	if (element.getAttribute("class") === "glyphicon glyphicon-play") {
		audioPlayer.setAttribute('src', audioSource);
		audioPlayer.load();

		currentSong.innerHTML = songTitle;

		audioPlayer.onloadedmetadata = function() {
			audioPlayer.play();
			element.setAttribute("class", "glyphicon glyphicon-pause");
		};

	} else if (element.getAttribute("class") === "glyphicon glyphicon-pause") {
		audioPlayer.pause();
		element.setAttribute("class", "glyphicon glyphicon-play");
	}
}


audioPlayer.addEventListener("timeupdate", function() {
	document.getElementsByClassName('songProgress')[0].setAttribute("value", audioPlayer.currentTime / audioPlayer.duration);
});
