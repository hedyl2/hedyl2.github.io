// this is where the code for this function goes
function playCraps(){
  console.log("craps js started");  
  // This defines our two die variables. There is nothing in these variables yet.
  var die1;
  var die2;
  // this grabs a random number less than one, multiplies it by six, then rounds the decimal down and then adds one to it. The goal is to get a number between 0 and 6, 
  die1= Math.floor(Math.random() * 6) + 1;
  // what's being printed here is not the word die1, but rather the output of our random number generation seen above
  console.log(die1);
  // this grabs a random number less than one, multiplies it by six, then rounds the decimal down and then adds one to it. The goal is to get a number between 0 and 6, 
  die2= Math.floor(Math.random() * 6) + 1;
  console.log(die2);
  // replaces the contents of die1Res and die2Res with whatever die1 and die2 are.
  document.getElementById("die1Res").innerHTML = die1;
  document.getElementById("die2Res").innerHTML = die2;
  // ** = to the power of, so this would output 2^(output of die1)
  var mathFun = 2**die1;
  console.log(mathFun);
  // adds the output of the two die together, the variable is called "sum"
  var sum = die1 + die2;
  //check the sum, add a lose condition if it is 7 or 11
  if (sum == 7){
    document.getElementById("gameRes").innerHTML = "You lose!";
  } else if (sum == 11){
    document.getElementById("gameRes").innerHTML = "You lose!";
  //checks for doubles and adds a win condition
  } else if (die1 == die2 && die1%2 == 0){
    document.getElementById("gameRes").innerHTML = "You win!";
  //non-failure condition if the sum is not 7 or 11
  } else{
      document.getElementById("gameRes").innerHTML = "You didn't lose. Please try again";
  }
}

// Start and stop functions
  function start(){
    console.log("start() function began");
	document.getElementById("startButton").disabled = true;
	document.getElementById("stopButton").disabled = false;
	index = 0;
	timer = setInterval(updateDisplay, time_interval);
  }
  
  function stop(){
    console.log("stop() function began");
	document.getElementById("stopButton").disabled = true;
	document.getElementById("startButton").disabled = false;
	clearInterval(timer);
  }


// HOOT 
function playStation(){
	console.log("playStation() started");
	mySound = new sound("hoot6.wav");
	mySound.play();
}

function sound(srcFile){
	console.log("Sound class is operational");
	this.sound = document.createElement("audio");
	this.sound.src = srcFile;
	this.sound.setAttribute("preload", "none");
	this.sound.setAttribute("controls", "none");
	this.sound.style.display = "none";
	document.body.appendChild(this.sound);
	this.play = function(){
			this.sound.play();
	}
	this.stop = function(){
			this.sound.pause();
	}
}
