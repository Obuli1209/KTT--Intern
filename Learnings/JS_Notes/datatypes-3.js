//Destructing assignment - unpack values form arrays and objects are simplifying the process of extracting data.

//Object destructing
// Simulate receiving the data
const sensorData = {
  temperature: 29.4,
  humidity: 82,
  soilMoisture: 45,
  leafWetness: 5,
  location: {
    lat: 11.6643,
    lng: 78.146,
  },
};

// Destructuring the object
const {temperature,soilMoisture,location: { lat, lng },} = sensorData;
const { leafWetness: lw } = sensorData;

// Using the destructured values
if (soilMoisture < 40) {
  console.log("Soil is dry. Start irrigation.");
}

console.log(`Current temperature: ${temperature} Celsius`);
console.log(`Field location: (${lat}, ${lng})`);
console.log(`LeafWetness: ${lw}`);

//add values
let sensor = {
  temperature: 29.4,
  humidity: 82,
};
// Add new property: soilMoisture
let updatedSensor = { ...sensor, soilMoisture: 45 };
console.log("Updated values: ", updatedSensor);

//Delete values
let { humidity, ...updatedSensor1 } = updatedSensor;
console.log("After Deletion: ", updatedSensor1);

console.log(
  "***********************  ARRAY DESTRUCTING  ****************************"
);

//Array destructing
const sensorData2 = [29.4, 85, 40, 10, 11.6643, 78.146];
const [temperature2, humidity2, soilMoisture2, leafWetness2, lat2, lon2] =
  sensorData2;
console.log(`Temperature : ${temperature2}`);
console.log(`Humidity : ${humidity2}`);
console.log(`Soil Moisture : ${soilMoisture2}`);
console.log(`Leaf Wetness : ${leafWetness2}`);
console.log(`Latitude : ${lat2}`);
console.log(`Longitutde: ${lon2}`);

//Add values
const sensorArray = [29.4, 82];
const newArray = [...sensorArray, 45]; // Add soilMoisture

console.log("Add new values: ", newArray);

//delete values
const newData = newArray.filter((_, index) => index !== 1);
console.log("After Deletion: ", newData);

console.log(
  "***********************  Date and Time ****************************"
);
const now = new Date();
console.log("Todat date: ", now);

//format date
const format = now.toLocaleDateString("en-IN");
console.log("Formatted Date: ", format);

//custom date and time
const custom = now.toLocaleString("en-US", {
  day: "2-digit",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});
console.log("Customaized date and time: ", custom);

//only year
console.log("Get Fullyear: ", now.getFullYear());
//only month
console.log("Get Month: ", now.getMonth());
const options = { month: "long" };
const monthName = now.toLocaleDateString("en-GB", options);
console.log("Get Month name in word: ", monthName);
//only date
console.log("Get Date: ", now.getDate());
//only day
console.log("Get Day: ", now.getDay());
const options2 = { weekday: "long" };
const dayName = now.toLocaleDateString("en-GB", options2);
console.log("Get Day name in word: ", dayName);

//only hours
console.log("Get Hours: ", now.getHours());
//only Minutes
console.log("Get Minutes: ", now.getMinutes());
//only seconds
console.log("Get Seconds: ", now.getSeconds());
//only Milliseconds
console.log("Get Milliseconds: ", now.getMilliseconds());


console.log(
  "***********************  JSON Methods  ****************************"
);
//JSON - JavaScript Object Notation
//Used for Data exchange - client to server.
//API
//key must be "String"
//only strings, numbers, booleans,arrays,objects.

//convert JS object to JSON String Format
//using JSON.stringify
let sensorData1 = {
  temperature: 29.4,
  humidity: 82,
  soilMoisture: 45,
  leafWetness: 5,
  location: {
    lat: 11.6643,
    lng: 78.146,
  },
};
let JsonFormat = JSON.stringify(sensorData1);
console.log("Convert to JSON Format: ",JsonFormat);


//convert JSON String Format to JS Object
//using JSON.parse()
sensorData1 = JSON.parse(JsonFormat);
console.log("Convert to JS Object: ",sensorData1);

//.toJSON() - hide sensitive data like passwords, tokens, ID
let driverDetails = {
  name : "Dcode",
  userName : "dcode@ktt-1",
  password : "dcode@123",
  toJSON(){
    return {
      name : this.name,
      userName : this.userName
    };
  }
};
console.log("Using toJSON() method: ",JSON.stringify(driverDetails));







