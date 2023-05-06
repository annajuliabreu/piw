const http = require('http');
const app = require('./config/express')();

http.createServer(app).listen(app.get('port'), function () {
    console.log('Listening on port / Express server escutando a porta ' + app.get('port'));
});