
var currentlyPlayingAudio = new Audio();
var currentTitle;
var arrayOfSongsToTimeStamp = [];
var timeStampOne;
var timeStampTwo;


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


// function playSong(songTitle){
// 	// timeStampTwo = event.timeStamp;
// 	var element = document.querySelector('[aria-label='+songTitle+']');
// 	// get HTML element
// 	var attributeValue = element.getAttribute("class"); 
// 	// get value of class attribute
// 	if(currentlyPlayingAudio.paused != true){
// 		resetButton();
// 	}
// 	currentTitle = songTitle;
// 	var audio = new Audio('music/'+songTitle+'.m4a');
// 	currentlyPlayingAudio.pause();
// 	timeStampOne = event.timeStamp;
// 	if(attributeValue === "glyphicon glyphicon-play"){
// 		element.setAttribute("class", "glyphicon glyphicon-pause");
// 		if(songTitle in arrayOfSongsToTimeStamp){
// 			audio.currentTime = arrayOfSongsToTimeStamp[songTitle];
// 			audio.play();
// 			currentlyPlayingAudio = audio;
// 			// return;
// 			console.log("Hello");
// 		}
// 		else{
// 			audio.play();
// 			currentlyPlayingAudio = audio;
// 		}
// 	}
// 	else{
// 		audio.pause();
// 		element.setAttribute("class", "glyphicon glyphicon-play");
// 	}
// }

function playSong(songTitle){
	//song object
	var audio = new Audio('music/'+ songTitle +'.m4a');
	//HTML element object
	var element = document.querySelector('[aria-label='+ songTitle + ']');
	//get value of class attribute
	var attributeValue = element.getAttribute("class");

	if (attributeValue === 'glyphicon glyphicon-play') {
		audio.play();
		attributeValue.setAttribute("class", "glyphicon glyphicon-pause");
	}else{
		audio.pause();
	}
		

}



//this alerts you where in the xdirection you are clicking
// $('#song-box-header').click(function(e){
// 	alert(e.pageX);
// })