function timerdisplayv1(){
	console.log("timerdisplayv1() begin");
	var counter = 50;
    document.getElementById("timerdisplay").innerHTML = counter;
    console.log(counter);
  setTimeout(function(){
    counter = counter - 5;
    document.getElementById("timerdisplay").innerHTML = counter;
    console.log(counter);
  }, 5000);
  setTimeout(function(){
    counter = counter - 5;
    document.getElementById("timerdisplay").innerHTML = counter;
    console.log(counter);
  }, 10000);
  setTimeout(function(){
    counter = counter - 5;
    document.getElementById("timerdisplay").innerHTML = counter;
    console.log(counter);
  }, 15000);
  setTimeout(function(){
    counter = counter - 5;
    document.getElementById("timerdisplay").innerHTML = counter;
    console.log(counter);
  }, 20000);
  setTimeout(function(){
    counter = counter - 5;
    document.getElementById("timerdisplay").innerHTML = counter;
    console.log(counter);
  }, 25000);
  setTimeout(function(){
    counter = counter - 5;
    document.getElementById("timerdisplay").innerHTML = counter;
    console.log(counter);
  }, 30000);
  setTimeout(function(){
    counter = counter - 5;
    document.getElementById("timerdisplay").innerHTML = counter;
    console.log(counter);
  }, 35000);
  setTimeout(function(){
    counter = counter - 5;
    document.getElementById("timerdisplay").innerHTML = counter;
    console.log(counter);
  }, 40000);
  setTimeout(function(){
    counter = counter - 5;
    document.getElementById("timerdisplay").innerHTML = counter;
    console.log(counter);
  }, 45000);
  setTimeout(function(){
    counter = counter - 5;
    document.getElementById("timerdisplay").innerHTML = "Fire!";
    console.log(counter);
  }, 50000);
}
