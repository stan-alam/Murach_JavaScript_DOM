function stopWatch() {
	var startTime = Date.now();

	function getDelay() {
		var elapsedTime = Date.now() - startTime;
		console.log(elapsedTime);
	}

	return getDelay;

}

var something = stopWatch();

something();