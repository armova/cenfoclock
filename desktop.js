var fs = require("fs");

_3vot.el.innerHTML = fs.readFileSync( __dirname + "/code/views/layout.html"  );

require("./code/controllers/countDown.js");
require("./code/controllers/wsReceiver.js");



