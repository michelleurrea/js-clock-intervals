document.addEventListener('DOMContentLoaded', function(){
	document.getElementById('startClick').addEventListener('click', startClock)});
 
var time, interval;

function startClock() {
	console.log("Clock has started");

	// Set initial time, display time to user
	time = 0;
	document.getElementById('timer').style.color = 'chartreuse';
	document.getElementById('timer').style.color = time;

	// Start the time
	interval = setInterval(tick, 1000);
}


function tick() {
	time += 1;
	document.getElementById('timer').textContent = time;
	// Rotate second hand
	rotateSec(time);

	// Rotate minute hand
	rotateMin(time);

	// Rotate hour hand
	rotateHour(time);
}


function rotateSec(time) {
	var degrees = (time/60)*360;
	var el = document.getElementById("second");
	el.style.transform = "rotate(" + degrees + "deg)";
}

function rotateMin(time) {
	var degrees = (time/3600)*360;
	var el = document.getElementById("minute");
	el.style.transform = "rotate(" + degrees + "deg)";
}

function rotateHour(time) {
	var degrees = (time/43,200)*360;
	var el = document.getElementById("hour");
	el.style.transform = "rotate(" + degrees + "deg)";
}