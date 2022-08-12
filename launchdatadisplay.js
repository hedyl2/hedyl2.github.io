function getData() {
		console.log("getData() started");
		var loadedData = loadData()
		return loadedData;
}

function dataRow(legend, value, units){
	msg ="<td>";
	msg += legend;
	msg += ": </td><td>";
	msg += value;
	msg += " " + units;
	msg += "</td>"; 
	return msg;
}

class InputData{
	constructor(
		time_seconds,
		latitude,
		longitude,
		gps_altitude,
		bmpSensor_altitude,
		bmpSensor_pressure,
		bmpSensor_temp,
		digSensor_temp,
		cssSensor_temp,
		cssSensor_eCO2,
		cssSensor_TVOC,
		UV,
		accelX,
		accelY,
		accelZ,
		magneticX,
		magneticY,
		magneticZ,
		gyroX,
		gyroY,
		gyroZ
	){
		this.time_seconds = time_seconds;
		this.latitude = latitude;
		this.longitude = longitude;
		this.gps_altitude = gps_altitude;
		this.bmpSensor_altitude = bmpSensor_altitude;
		this.bmpSensor_pressure = bmpSensor_pressure;
		this.bmpSensor_temp = bmpSensor_temp;
		this.digSensor_temp = digSensor_temp;
		this.cssSensor_temp = cssSensor_temp;
		this.cssSensor_eCO2 = cssSensor_eCO2;
		this.cssSensor_TVOC = cssSensor_TVOC;
		this.UV = UV;
		this.accelX = accelX;
		this.accelY = accelY;
		this.accelZ = accelZ;
		this.magneticX = magneticX;
		this.magneticY = magneticY;
		this.magneticZ = magneticZ;
		this.gyroX = gyroX;
		this.gyroY = gyroY;
		this.gyroZ = gyroZ;
	}
}

function updateDisplay(){
	console.log("updateDisplay() started");
	theTime = new Date();
	
	// time console print
	console.log(theTime.getHours() + ":"
		+ (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) + ":" 
		+ (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds())
	);
	
	// time display
	document.getElementById("timeDisplay()").innerHTML = (
		theTime.getHours() + ":"
		+ (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) + ":"
		+ (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds()) + ":"
	);
	
	// table
	var timeRead = data[index].time_seconds;
	
	if(timeRead >= 10){
		document.getElementById("data").rows["seconds"].innerHTML = 
			dataRow("Time Elapsed", data[index].time_seconds, "seconds");
		document.getElementById("data").rows["latitude"].innerHTML = 
			dataRow("Latitude", data[index].latitude, "latitude");
		document.getElementById("data").rows["longitude"].innerHTML = 
			dataRow("Longitude", data[index].longitude, "longitude");
		document.getElementById("data").rows["bmpSensorPress"].innerHTML = 
			dataRow("GPS Altitude", data[index].time_gps_altitudes, "meters");
	}
	
	if(index < 500){
		index++;
	} else {
		index = 0;
	}
}