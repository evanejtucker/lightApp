
$(document).ready(function() {

// Global Variables
// ---------------------------------------------------------------------------------------------------------

let queryUrl = "http://10.0.0.196/api/CJCRYtzqNnXkwK8nzGd9m5BDT8LuNt-jhCwCesWs/lights/2/state";
let body = 	{"on": "false"};

let queryUrl2 = "http://10.0.0.196/api/CJCRYtzqNnXkwK8nzGd9m5BDT8LuNt-jhCwCesWs/groups/2/";
let queryUrl3 = `http://10.0.0.196/api/CJCRYtzqNnXkwK8nzGd9m5BDT8LuNt-jhCwCesWs/groups/2/action/state`;

let colorUrl = "http://10.0.0.196/api/CJCRYtzqNnXkwK8nzGd9m5BDT8LuNt-jhCwCesWs/lights/2/state";

// let colorBody = {"on":true, "sat":254, "bri":254,"hue": color}
let redColor = 60000;
let greenColor = 20000;

// funcctions
// ---------------------------------------------------------------------------------------------------------

var getGroup = ()=> {
    $.ajax({
        url: queryUrl2,
        context: document.body,
      }).done(function(response) {
        console.log(response)
      });
}

var setGroup = ()=> {
    $.ajax({
        url: queryUrl3,
        context: document.body,
        method: "PUT",
        dataType: 'json',
        body: JSON.stringify({"on": false})
      }).done(function(response) {
        console.log(response)
      });
}

var turnOff = ()=> {
    $.ajax({
        url: queryUrl,
        context: document.body,
        method: "PUT",
        dataType: "json",
        data: JSON.stringify({"on": false})
      }).done(function(response) {
        console.log(response)
      });
}

var turnOn = ()=> {
    console.log("working");
    $.ajax({
        url: queryUrl,
        context: document.body,
        method: "PUT",
        dataType: "json",
        data: JSON.stringify({"on": true})
      }).done(function(response) {
        console.log(response)
      });
}

var setColor = () => {
    $.ajax({
        url: colorUrl,
        context: document.body,
        method: "PUT",
        dataType: "json",
        data: JSON.stringify({"on":true, "sat":254, "bri":254,"hue": 70000})
      }).done(function(response) {
        console.log(response)
      });    
}





// main process
// ---------------------------------------------------------------------------------------------------------

    $("#turnOff").on("click", turnOff);
    $("#turnOn").on("click", turnOn);

    // $("#red").on("click", setColor(redColor));
    // $("#green").on("click", setColor(greenColor));
    $("#greenButton").on("click", setColor);


    $("#offGroup").click(setGroup)
    getGroup();

});