
var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = process.env.PORT || 3000;
const fetch = require('node-fetch');

app.use('/assets', express.static(__dirname + '/assets'));
app.use('/modules', express.static(__dirname + '/node_modules'));

// ruta que obtiene el clima desde la api darksky
// recibe los parametros lat y long desde el cliente
// se obtiene el clima desde el servidor para ocultar la clave de acceso y para evitar el problema cors
app.get('/clima', function(req, res){
  fetch('https://api.darksky.net/forecast/3a9144769ee03742ac604f6489994f11/'+req.query.lat+','+req.query.long+'?units=auto')
    .then(res => res.json())
    .then(json => res.send(json));
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(port, function(){
  console.log('listening on *: ' + port);
});
