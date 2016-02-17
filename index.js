var express = require('express');
var app = express();
var port = 8080;

app.use(express.static(__dirname + '/public'));

app.get('/does-it-work/with/bananas', function(req, res){
   res.send('UMM YEAH, OF COURSE! GWHARSH!');
});


app.listen(port, function(){
    console.log('THE APP IS ALIVE!!!! AND KICKIN ON PORT:', port);
});

