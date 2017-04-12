var time = 0;

var audioPlayer = document.getElementById('musicPlayer');



var currentElement;

function resetButton(){
	var element = document.querySelector('[aria-label='+currentTitle+']');
	element.setAttribute('class', 'glyphicon glyphicon-play');
}
//resets last players button back to normal

// function savePreviousSongInfo(currentTitle){
// 	arrayOfSongsToTimeStamp[currentTitle] = timeStampTwo - timeStampOne;
// 	console.log(currentTitle + " is the currently at " + arrayOfSongsToTimeStamp[currentTitle]);
// 	printDictionary();
// }

function printDictionary(){
	for(var key in arrayOfSongsToTimeStamp){
		var val = arrayOfSongsToTimeStamp[key];
		console.log("Song: "+key+" is at "+val);
	}
}



function playSong(songTitle){

	var playButton = document.getElementById('playButton');
	
	//song object
	var audioSource = "assets/music/" + songTitle + ".m4a";

	audioPlayer.setAttribute('src', audioSource);
	audioPlayer.load();

	audioPlayer.onloadedmetadata = function() {
		audioPlayer.play();
	};
	playButton.setAttribute("class", "pause glyphicon glyphicon-pause");
}

function pause(){

	var playButton = document.getElementById('playButton');
	if(playButton.getAttribute("class") === "play glyphicon glyphicon-play"){
		audioPlayer.play(time);
		playButton.setAttribute("class", "pause glyphicon glyphicon-pause");
	}
	else{
		playButton.setAttribute("class", "play glyphicon glyphicon-play");
		audioPlayer.pause();
		time = audioPlayer.currentTime;

	}
}

function stepBack(){
	audioPlayer.pause();
	audioPlayer.currentTime() = 0;
	document.getElementsByClassName('songProgress')[0].setAttribute("value", 0);
}


audioPlayer.addEventListener("timeupdate", function() {
	document.getElementsByClassName('songProgress')[0].setAttribute("value", audioPlayer.currentTime / audioPlayer.duration);
});
