function creds(){
  console.log("creds() function started");
  //variables here
  var firstName;
  var lastName;
  var badgeNum;
  var fullName;
  var fullNameLength;
  
  firstName = document.getElementById("fName").value;
  console.log(firstName);
  lastName = document.getElementById("lName").value;
  console.log(lastName);
  fullName = firstName + " " + lastName;
  console.log(fullName);
  fullNameLength = fullName.length;
  console.log("The full name is " + fullNameLength + " long.");
  badgeNum = document.getElementById("badgeID").value;
  console.log(badgeNum);
  
  // validation
  if(fullNameLength > 20){
    document.getElementById("loginStatus").innerHTML = "full name is invalid";
  } else if (badgeNum > 999 || badgeNum < 1){
    document.getElementById("loginStatus").innerHTML = "Badge number is invalid";
  } else {
    alert("Login Successful. Welcome, " + fullName)
    location.replace("./index.html")
  }
}