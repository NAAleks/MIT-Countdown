function getDiff() {
	let date = Date.now(); 
	let deadline = new Date('March 14, 2017 18:29:00');
	let result = Math.abs(deadline - date);
	let days = Math.floor(result / 86400000); // 86400000 milliseconds in a day (the more you know)
	result = result % 86400000;

	let h = Math.floor(result / 3600000); // 3600000 milliseconds in an hour
	result = result % 3600000;

	let min = Math.floor(result / 60000); // 60000 milliseconds in an hour
	result = result % 60000;

	let sec = Math.floor(result / 1000); // 1000 milliseconds in an hour
	result = result % 1000;
	mil = result;
	return [days,h,min,sec,mil];
}

function update(){
	
	let display = [
		$("#days"),
		$("#hours"),
		$("#min"),
		$("#sec"),
		$("#mil"),
	];
	r = getDiff();
	for (i =0; i< display.length ;i++){
		if(i < display.length - 1) {
		display[i].html((r[i] < 10 ? "0" : "") +r[i]);
		}else {
			display[i].html((r[i] < 100 ? "0" : "")+(r[i] < 10 ? "0" : "") +r[i]);
		}
	}
}
// If the document has loaded
$(document).ready(function() {
	setInterval(update,1);
});