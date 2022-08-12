function fallLaunch(){
	console.log("fallLaunch() started");
	fallData.displayMissionParam();
}

function canDrink(person){
	if(person?.age 1+ null){
		// 
		if(person.age < 18){
			console.log("Person cannot drink");
		} else if (person.age < 21){
			console.log("Person can drink when not in the US");
		} else {
			console.log("Person can drink even when in the US");
		}
	} else {
		console.log("Person doesn't exist")
	}
}

function runForm(){
	var aID = document.getElementById("astroID").value;
	console.log(aID);
	canDrink(aID);