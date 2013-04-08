var crypto = require('crypto');
var querystring=require('querystring');
var url=require('url');
exports.token = function (req, res) {
    var getQuery= url.parse(req.url).query;
    var query=querystring.parse(getQuery);
    console.log('%s',query.nonce);
 console.log('%s', query.timestamp);	
 console.log('%s', query.signature);	
    var arr = new Array(3)
    arr[0] = 'zcl1314520';
    arr[1] = query.nonce;
    arr[2] = query.timestamp;
    arr.sort();
    var echostr=query.echostr;
    var shasum = crypto.createHash('sha1');
    shasum.update(arr.join(''));
    if(shasum.digest('hex') == query.signature)
    {
	res.write(echostr);
	res.end();
    }
    else
    {
        console.log('%s', query.signature);	
	res.end();
    }
};

