  function start(){
    console.log("start() function began");
	document.getElementById("startButton").disabled = true;
	document.getElementById("stopButton").disabled = false;
  }
  
  function stop(){
    console.log("stop() function began");
	document.getElementById("stopButton").disabled = true;
	document.getElementById("startButton").disabled = false;
  }