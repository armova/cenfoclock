var host = '';
var ControlTime = require("./countDown");

var ws = new WebSocket(host);
ws.onopen = function() {
    console.log('connected');
};

ws.onmessage = function (event) {
    if (JSON.parse(event.data) != ""){
    	ControlTime.emit("addTime", 3);
    	console.log(event);
    	if(event){
    		var timePlusItem = document.createElement("div")
    		var ItemSpan = document.createElement("span")
    		timePlusItem.appendChild(ItemSpan)
    		timePlusItem.classList.add("plusTimeMessage")
    		document.body.appendChild(timePlusItem)
    		setTimeout(function(){
    			timePlusItem.classList.add("show")
    		},200)
    		setTimeout(function(){
				timePlusItem.classList.remove('show')
			},2500)
    		
    	}
    }
};



