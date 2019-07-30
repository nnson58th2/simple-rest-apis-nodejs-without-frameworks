const url = require('url');
 
exports.sampleRequest = function (req, res) {
    const reqUrl = url.parse(req.url, true);
    var name = 'bạn gì đó ơi';
    if (reqUrl.query.name) {
        name = reqUrl.query.name
    }
 
    var response = {
        "name": "Hello, " + name
    };
 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
};