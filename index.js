var http = require('http'),
    valid = require('./lib/valid'),
    processMsg=require('./lib/processMessage');

http.createServer(function (req, res) {
//res.writeHead(200,{"Content-Type":"text/html"});


    if (req.method == "GET") {
        valid.token(req, res);
    }
    if (req.method == "POST") {
        var datas="";
        req.on("data",function(data){
            datas+=data;
        }).on("end",function(){
                processMsg.processMessages(datas,res);
            });
    }

}).listen(8888)
console.log("runing 8888")

