


console.log(dic_data.vw_name[0])

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(3000);
