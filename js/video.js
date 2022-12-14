var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector('#player1')
	video.loop = false
	video.autoplay = false
	console.log("Loop is set to" + video.autoplay)
	console.log("Auto play is set to" + video.autoplay)
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	video.play();
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Video Up");
	video.playbackRate = video.playbackRate / 0.9;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video Down");
	video.playbackRate = video.playbackRate * 0.9;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime = video.currentTime + 10;
	if (video.currentTime > video.duration) {
		video.currentTime = 0
	}
	console.log("Current Location of the video is " + video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true){
		console.log("Unmute");
		video.muted = false
		this.innerHTML = "Mute"
	}
	else{
		console.log("Mute")
		video.muted = true
		this.innerHTML = "Unmute"
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("The current value is", video.volume)
	video.volume = this.value / 100 
	let vol= document.querySelector("#volume").innerHTML = this.value + "%";
	console.log("The current value is", video.volume)
	console.log(document.querySelector("#volume"))
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});