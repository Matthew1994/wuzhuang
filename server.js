var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello World!');
});


app.get('/soldier/:id', function(req, res) {
    var soldierData = [];
    for (var i = 0; i < parseInt(Math.random()*1000); i++) {
        soldierData.push({
            id: parseInt(Math.random()*20),
            name: '张三',
            honor: '班长',
            lian: '三',
            pai: '一',
            ban: '二',
            phone: '13015874562',
            wechat: 'okokoko',
            operation: '修改信息'
        });
    }
    res.send(soldierData);
});

app.use('/', express.static('build/page'));
app.use('/lib', express.static('bower_components'));
app.use('/css', express.static('build/css'));
app.use('/js', express.static('build/js'));
app.use('/images', express.static('build/image'));


var server = app.listen(8000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
