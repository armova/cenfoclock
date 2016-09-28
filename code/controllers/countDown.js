var EventEmitter = require('events').EventEmitter
var controlTime = new EventEmitter();

var timeOnStart = 15;
var timeToOrange = 10;
var timeToRed = 5; 


// set the date we're counting down to
var target_date = new Date();
target_date.setMinutes(target_date.getMinutes() + timeOnStart);
 
// variables for time units
var days, hours, minutes, seconds;
 
// get tag element
var countdownHours = document.getElementById("hours");
var countdownMins = document.getElementById("mins");
var countdownSecs = document.getElementById("secs");
 
// update the tag with id "countdown" every 1 second
setInterval(function () {
 
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    //Function for changing Backgrounds
    var changeBG = function(addBG,removeBG1,removeBG2){
        document.body.classList.remove(removeBG1,removeBG2)
        document.body.classList.add(addBG)
    }

    if(seconds_left >=(timeToOrange*60)){
        changeBG("bg-purple","bg-orange","bg-red")
    }else if(seconds_left >=(timeToRed*60)){
        changeBG("bg-orange","bg-purple","bg-red")
    }else{
        changeBG("bg-red","bg-purple","bg-orange")
    }
 
    // do some time calculations
    if (seconds_left > 0){
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
      
    countdownHours.innerHTML = '<span class="number">' + hours + '</span>' + '<span class="label">HORAS</span>';
    countdownMins.innerHTML = '<span class="number">' + minutes + '</span>' + '<span class="label">MIN</span>';
    countdownSecs.innerHTML = '<span class="number">' + seconds + '</span>' + '<span class="label">SEG</span>';
    } else{
        target_date = new Date();
    }
}, 1000);

controlTime.on('addTime', function(msg){
    target_date.setMinutes(target_date.getMinutes() + msg);
});

module.exports = controlTime









